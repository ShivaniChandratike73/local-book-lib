(this["webpackJsonpbook-library"]=this["webpackJsonpbook-library"]||[]).push([[0],{20:function(e,t,a){e.exports=a(44)},25:function(e,t,a){},26:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),s=a.n(l),o=(a(25),a(26),a(19)),i=a(4),c=a(5),u=a(7),p=a(6),m=a(2),h=a(8),d=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={value:"",typing:!1,typingTimeout:0},a.handleChange=a.handleChange.bind(Object(m.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a.handleKeyDown=a.handleKeyDown.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){var t=this;this.setState({value:e.target.value}),this.state.typingTimeout&&clearTimeout(this.state.typingTimeout),this.setState({value:e.target.value,typing:!1,typingTimeout:setTimeout((function(){t.props.callback(t.state.value,!1)}),300)})}},{key:"handleSubmit",value:function(e){this.state.value.length>0&&this.props.callback(this.state.value,!0),e.preventDefault()}},{key:"handleKeyDown",value:function(e){"Enter"===e.key&&(e.preventDefault(),this.handleSubmit(e))}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("form",{className:"search-form",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"editable item"},r.a.createElement("input",{className:"search-input search-suggestion",type:"text",placeholder:this.state.value.length>2?this.state.suggest:"",disabled:"True"}),r.a.createElement("input",{className:"search-input search-main",id:"search-input-box",placeholder:"Search Books",type:"text",value:this.state.value,onChange:this.handleChange,onKeyDown:this.handleKeyDown})),r.a.createElement("div",{className:"item",style:{paddingTop:"5px",color:"gray",fontSize:"14px"}},"Hit Enter to load all results.\xa0",r.a.createElement("a",{href:"https://sqlite.org/fts5.html#full_text_query_syntax",target:"_blank",rel:"noopener noreferrer"},"Query Syntax"))),r.a.createElement("div",{className:"item",style:{paddingRight:"20px",color:"gray",fontSize:"14px",textAlign:"right"}},"Total Books : ",this.props.totalBooks))}}]),t}(r.a.Component),b=a(3),g=a.n(b);function k(e){var t=e.props,a=[];return"None"!==t.pdf_url&&a.push(r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"book-link-pdf App-link",href:t.pdf_url},"PDF(",(t.pdf_size/1048576).toFixed(2),"MB)")),"None"!==t.epub_url&&a.push(r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"book-link-epub App-link",href:t.epub_url},"EPUB(",(t.epub_size/1048576).toFixed(2),"MB)")),"None"!==t.other_url&&a.push(r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"book-link-epub App-link",href:t.other_url},t.format,"(",(t.other_size/1048576).toFixed(2),"MB)")),a.length>0?r.a.createElement(r.a.Fragment,null,a.map((function(e){return e}))):""}var f=function(e){return r.a.createElement("div",{className:"book-card"},r.a.createElement("div",{className:"book-card-img"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.props.url},null!=e.props.image?r.a.createElement("img",{alt:e.props.title,className:"book-card-img-tag",src:"data:image/jpeg;base64,".concat(e.props.image)}):r.a.createElement("img",{alt:e.props.title,className:"book-card-img-tag",src:e.props.image_url}))),r.a.createElement("div",{className:"book-card-details"},r.a.createElement("div",{className:"book-card-tite"},r.a.createElement("span",{className:"card-span-title"}," ",e.props.title," ")),r.a.createElement("div",{className:"book-card-subtitle"}),r.a.createElement("div",{className:"book-card-description"},r.a.createElement("span",{className:"book-desc-span"},e.props.description.length>0?e.props.description:"Book description not available.")),r.a.createElement("div",{className:"book-card-misc"},r.a.createElement("span",{style:{marginLeft:"0px"}},r.a.createElement("b",null,"Author:"),e.props.author.substring(0,18),","),r.a.createElement("span",{style:{marginLeft:"5px"}},r.a.createElement("b",null,"Published:"),e.props.year,","),r.a.createElement("span",{style:{marginLeft:"5px"}},r.a.createElement("b",null,"Pages:"),e.props.pages))),r.a.createElement("div",{className:"book-card-download"},r.a.createElement(k,{props:e.props})))},y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={books:!1,initialBooks:!1,search:"",totalBooks:""},a.handleSearchCallback=a.handleSearchCallback.bind(Object(m.a)(a)),a.handleKeyDown=a.handleKeyDown.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleKeyDown",value:function(e){e.ctrlKey&&e.composed&&e.shiftKey&&"F"===e.key&&document.getElementById("search-input-box").focus()}},{key:"componentDidMount",value:function(){var e=this;g.a.get("/totalbooks").then((function(t){e.setState({totalBooks:t.data[0].count})})),g.a.post("/programming OR operating system OR algorithm                         OR data structures OR science OR network                        OR engineering OR hardware OR embedded OR database                        /48").then((function(t){e.setState({books:t.data,initialBooks:t.data})})),document.addEventListener("keydown",this.handleKeyDown,!1)}},{key:"handleSearchCallback",value:function(e,t){var a=this;e.length>0?(t?g.a.post("/"+e).then((function(e){a.setState({books:e.data?e.data:[]})})):e.length>this.state.search.length&&g.a.post("/"+e+"/12").then((function(e){a.setState({books:e.data?e.data:[]})})),this.setState({search:e})):this.setState({books:this.state.initialBooks,search:""})}},{key:"render",value:function(){return this.state.books?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"search-wraper"},r.a.createElement(d,{callback:this.handleSearchCallback,totalBooks:this.state.totalBooks})),r.a.createElement("div",{className:"book-wraper"},this.state.books.map((function(e){return r.a.createElement(f,{key:!0===e.isbn?e.isbn:e.url.substring(27,e.url.length),props:Object(o.a)({},e)})})))):""}}]),t}(r.a.Component);var v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y,null))};s.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.5ecdd669.chunk.js.map