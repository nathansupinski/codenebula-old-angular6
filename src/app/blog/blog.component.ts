import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as EasyMDE from 'easymde';
import * as CodeMirror from 'codemirror';
import * as Showdown from 'showdown';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BlogComponent implements OnInit {
  public events: string[] = [];
  public opened: boolean;
  public title: string = 'hello world';
  public htmlContent: string;
  public markdownEditorData: string;
  public easyMde:any;
  public showdown:any;

  constructor() { }

  ngOnInit() {
    let _this = this;
    this.htmlContent = '<h1>Hello World</h1>';
    let markdownValueInit: string = '# Angular Markdown editor\n' +
      'Welcome to my angular markdown editor!\n' +
      'This is the first step in providing a blog engine.\n' +
      '> You can do cool things like block quotes\n' +
      '> > even nested ones. yes my css is horribly ugly right now\n' +
      '> > \n' +
      '\n' +
      '***Its also safe!*** The user can only type markdown, html is sanitized.\n' +
      '\n' +
      'But you can still display html if you use markdown code tags, this is a coding blog after all, the brackets are escaped with html entities to prevent nasty code!\n' +
      '\n' +
      '`<script>alert(\'pwned\');</script><div>wtf why no pwn?!</div>`';


    this.showdown = new Showdown.Converter();
    this.easyMde = new EasyMDE({ element: document.getElementById('markdown-editor')});
    this.easyMde.value(markdownValueInit);
    this.markdownEditorData = this.easyMde.value();
    this.htmlContent = this.showdown.makeHtml(this.markdownEditorData);

    function editorCallback(){
      this.editorChanged();
    }

    const bindedCallback = editorCallback.bind(this);

    this.easyMde.codemirror.on('change', bindedCallback);


  }

  public editorChanged() {
    //this.markdownValue = this.easyMde.value();
    this.markdownEditorData = this.easyMde.value();
    this.htmlContent = this.showdown.makeHtml(this.markdownEditorData);
    console.log(this.markdownEditorData);
  }

}
