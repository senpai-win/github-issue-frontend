(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{30:function(e,t,s){},32:function(e,t,s){},39:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s(0),i=s.n(n),r=s(9),c=s.n(r),l=(s(30),s(31),s(32),s(6)),o=s.n(l),d=s(11),u=s(10),b=s(12),j=s(14),h=s(15),p=s(17),g=s(16),m=s(8),x=s(46),f=s.p+"static/media/issueOpen.b3853066.svg",O=s.p+"static/media/issueClosed.2bd0e5e7.svg",v=function(e){var t=e.details,s=t.isOpen,n=t.title,i=t.createdAt,r=t.id,c=t.description,l=e.selectIssue,o=e.closeIssue,d=e.deleteIssue;return Object(a.jsxs)("div",{className:"justify-between items-center cursor-pointer border border-b-0 border-collapse border-gray-300 flex px-6 py-2 hover:bg-gray-200",children:[Object(a.jsxs)("div",{className:"flex",onClick:function(){l({id:r,title:n,description:c})},children:[Object(a.jsx)("div",{className:"pt-1",children:Object(a.jsx)("img",{width:"20",src:s?f:O})}),Object(a.jsxs)("div",{className:"ml-3",children:[Object(a.jsx)("div",{className:"font-medium text-left",children:n}),Object(a.jsxs)("div",{className:"text-gray-700 text-sm",children:["#",r," opened ",Object(a.jsx)(x.a,{date:i,locale:"en-US"})]})]})]}),Object(a.jsxs)("div",{children:[s?Object(a.jsx)(m.a,{variant:"outline-dark",size:"sm",className:"mr-2",onClick:function(){o({id:r,isOpen:0})},children:"Close"}):Object(a.jsx)(a.Fragment,{}),Object(a.jsx)(m.a,{variant:"outline-danger",size:"sm",onClick:function(){d(r)},children:"Delete"})]})]})},N=function(e){var t=e.list,s=e.selectIssue,n=e.closeIssue,i=e.deleteIssue;return Object(a.jsx)("div",{className:"bg-gray-100 border-b container mx-auto p-0",children:t&&t.length>0?t.map((function(e,t){return Object(a.jsx)(v,{selectIssue:s,details:e,closeIssue:n,deleteIssue:i},t)})):Object(a.jsx)("div",{className:"border border-b-0 border-collapse border-gray-300 cursor-pointer flex font-semibold hover:bg-gray-200 items-center justify-center px-6 py-2 text-xl",children:"No Issues to display"})})},w=function(e,t){return fetch(e,t).then((function(e){return e.json()})).catch((function(e){return{success:!1,message:"something went wrong"}}))},y="https://github-issue-backend.herokuapp.com",C=function(e){return w("".concat(y,"/list-issues?")+new URLSearchParams(e).toString(),{})},k=function(e){return w("".concat(y,"/add-issue"),{headers:{"Content-Type":"application/json"},mode:"cors",method:"POST",body:JSON.stringify(e)})},S=function(e,t){return w("".concat(y,"/update-issue/").concat(e),{headers:{"Content-Type":"application/json"},mode:"cors",method:"PATCH",body:JSON.stringify(t)})},P=function(e){return w("".concat(y,"/delete-issue/").concat(e),{mode:"cors",method:"DELETE"})},I=s(13),F=function(e){Object(p.a)(s,e);var t=Object(g.a)(s);function s(e){var a;Object(j.a)(this,s),(a=t.call(this,e)).onHandleChange=function(e){var t=e.target,s=t.name,n=t.value;a.setState(Object(d.a)({},s,n))},a.handleSubmit=function(){var e=a.state,t=e.title,s=e.description,n=e.id,i=e.isNew;a.props.handleSubmit(Object(u.a)(Object(u.a)({},i&&{title:t}),{},{description:s,id:n}))};var n=e.isNew,i=e.active,r=(i=void 0===i?{}:i).id,c=i.title,l=i.description;return a.state=n?{title:"",description:"",id:void 0,isNew:n,isEditable:!0}:{title:c,id:r,description:l,isNew:n,isEditable:!1},a}return Object(h.a)(s,[{key:"render",value:function(){var e=this,t=this.props.closeModal,s=this.state,n=s.id,i=s.title,r=s.description,c=s.isNew,l=s.isEditable;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault()},children:Object(a.jsxs)(I.a,{show:!0,onHide:t,animation:!1,children:[Object(a.jsx)(I.a.Header,{closeButton:!0,children:Object(a.jsx)(I.a.Title,{children:c?"New Issue":"Issue ".concat(n)})}),Object(a.jsxs)(I.a.Body,{children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{className:"font-bold",htmlFor:"title",children:"Title :-"}),Object(a.jsx)("br",{}),c?Object(a.jsx)("input",{onChange:this.onHandleChange,type:"text",name:"title",value:i,className:"border mb-2 rounded w-full p-1",required:!0}):Object(a.jsx)("div",{children:i})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"description",className:"font-bold",children:"Description :-"}),Object(a.jsx)("br",{}),Object(a.jsx)("textarea",{onChange:this.onHandleChange,type:"text",name:"description",value:r,className:"border mb-2 rounded w-full p-1",required:!0,readOnly:!l})]})]}),Object(a.jsxs)(I.a.Footer,{children:[!c&&Object(a.jsx)(m.a,{variant:"secondary",onClick:function(){e.setState({isEditable:!0})},children:"Edit"}),Object(a.jsx)(m.a,{variant:"primary",onClick:this.handleSubmit,children:"Save Changes"})]})]})})})}}]),s}(n.Component),M=s.p+"static/media/loader.30ff75dd.svg",D=function(e){var t=e.openNewIssueModal,s=e.filters,n=s.isOpen,i=s.isClosed,r=e.setFilter;return Object(a.jsxs)("div",{className:"bg-gray-100 border border-b-0 container flex items-center justify-between mt-2 mx-auto px-4 py-2",children:[Object(a.jsxs)("div",{className:"flex w-1/4",children:[Object(a.jsxs)("div",{className:"mr-2",children:[Object(a.jsx)("input",{onChange:r,checked:n,className:"mr-1",type:"checkbox",id:"isOpen",name:"isOpen",value:"isOpen"}),Object(a.jsx)("label",{htmlFor:"isOpen",children:"Open"})]}),Object(a.jsxs)("div",{className:"mr-2",children:[Object(a.jsx)("input",{onChange:r,checked:i,className:"mr-1",type:"checkbox",id:"isClose",name:"isClosed",value:"isClosed"}),Object(a.jsx)("label",{htmlFor:"isClosed",children:"Closed"})]})]}),Object(a.jsx)("div",{children:Object(a.jsx)(m.a,{variant:"primary",onClick:t,children:"New Issue"})})]})},E=s(21),L=s.n(E),T=function(e){var t=e.totalPages,s=(e.currentPage,e.handlePageClick);return Object(a.jsx)("div",{className:"container flex items-center justify-center px-4 py-2",children:Object(a.jsx)(L.a,{previousLabel:"previous",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:t,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:s,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})})},H=function(){return Object(a.jsx)("h1",{children:"GitHub Issue Demo"})},A=function(e){Object(p.a)(s,e);var t=Object(g.a)(s);function s(){var e;Object(j.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={currentPage:1,list:[],loading:!1,filters:{isOpen:!0,isClosed:!0},selected:void 0,isNew:!1,showModal:!1,totalPages:1},e.openNewIssueModal=function(){e.setState({isNew:!0,active:void 0,showModal:!0})},e.closeModal=function(){e.setState({isNew:!1,showModal:!1})},e.selectIssue=function(t){e.setState({selected:t,showModal:!0,isNew:!1})},e.setFilter=function(){var t=Object(b.a)(o.a.mark((function t(s){var a,n,i,r,c,l,b,j,h,p,g;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=s.target,n=a.name,i=a.checked,r=e.state,c=r.filters,r.currentPage,l=Object(u.a)(Object(u.a)({},c),{},Object(d.a)({},n,i)),e.setState({filters:Object(u.a)({},l),loading:!0}),t.next=6,C(Object(u.a)({page:1},l));case 6:if(b=t.sent,j=b.data,h=(j=void 0===j?{}:j).list,p=j.totalPages,g=b.message,h){t.next=13;break}return e.setState({loading:!1}),t.abrupt("return",alert(g));case 13:e.setState({loading:!1,list:h,totalPages:p});case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.deleteIssue=function(){var t=Object(b.a)(o.a.mark((function t(s){var a,n,i,r,c,l,d,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0}),t.next=3,P(s);case 3:if(a=t.sent,n=a.success,i=a.message,n){t.next=9;break}return e.setState({loading:!1}),t.abrupt("return",alert(i));case 9:return t.next=11,C({page:1});case 11:if(r=t.sent,c=r.data,l=(c=void 0===c?{}:c).list,d=c.totalPages,u=r.message,l){t.next=18;break}return e.setState({loading:!1}),t.abrupt("return",alert(u));case 18:e.setState({loading:!1,currentPage:1,list:l,totalPages:d});case 19:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleSubmit=function(){var t=Object(b.a)(o.a.mark((function t(s){var a,n,i,r,c,l,d,u,b,j,h;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=s.id,n=e.state.currentPage,i=a?n:1,e.setState({loading:!0,isNew:!1,showModal:!1}),!a){t.next=10;break}return t.next=7,S(a,s);case 7:t.t0=t.sent,t.next=13;break;case 10:return t.next=12,k(s);case 12:t.t0=t.sent;case 13:if(r=t.t0,c=r.success,l=r.message,c){t.next=19;break}return e.setState({loading:!1}),t.abrupt("return",alert(l));case 19:return t.next=21,C({page:i});case 21:if(d=t.sent,u=d.data,b=(u=void 0===u?{}:u).list,j=u.totalPages,h=d.message,b){t.next=28;break}return e.setState({loading:!1}),t.abrupt("return",alert(h));case 28:e.setState({loading:!1,currentPage:i,list:b,totalPages:j});case 29:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handlePageClick=function(){var t=Object(b.a)(o.a.mark((function t(s){var a,n,i,r,c,l;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=s.selected,e.setState({loading:!0}),t.next=4,C({page:a+1});case 4:if(n=t.sent,i=n.data,r=(i=void 0===i?{}:i).list,c=i.totalPages,l=n.message,r){t.next=11;break}return e.setState({loading:!1}),t.abrupt("return",alert(l));case 11:e.setState({loading:!1,currentPage:a+1,list:r,totalPages:c});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=Object(b.a)(o.a.mark((function e(){var t,s,a,n,i,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),t=this.state.currentPage,e.next=4,C({page:t});case 4:s=e.sent,s.success,a=s.data,n=(a=void 0===a?{}:a).list,i=void 0===n?[]:n,r=a.totalPages,c=void 0===r?1:r,this.setState({list:i,loading:!1,totalPages:c});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.list,s=e.showModal,n=e.isNew,i=e.selected,r=e.loading,c=e.filters,l=e.totalPages,o=e.currentPage;return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(H,{}),s&&Object(a.jsx)(F,{isNew:n,active:i,closeModal:this.closeModal,handleSubmit:this.handleSubmit}),Object(a.jsx)(D,{openNewIssueModal:this.openNewIssueModal,filters:c,setFilter:this.setFilter}),r?Object(a.jsx)("div",{className:"py-72 bg-gray-100",children:Object(a.jsx)("img",{alt:"loading.....",className:"mx-auto",width:"48",src:M})}):Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(N,{list:t,selectIssue:this.selectIssue,closeIssue:this.handleSubmit,deleteIssue:this.deleteIssue})}),Object(a.jsx)(T,{totalPages:l,currentPage:o,handlePageClick:this.handlePageClick})]})}}]),s}(n.Component);var B=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(A,{})})},J=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,47)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;s(e),a(e),n(e),i(e),r(e)}))},q=s(45),z=s(22),R=s(23);q.a.addDefaultLocale(z),q.a.addLocale(R),c.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(B,{})}),document.getElementById("root")),J()}},[[39,1,2]]]);
//# sourceMappingURL=main.69bd832a.chunk.js.map