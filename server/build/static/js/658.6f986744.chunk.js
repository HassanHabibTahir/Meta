"use strict";(self.webpackChunkmaplibregrid=self.webpackChunkmaplibregrid||[]).push([[658],{29002:function(e,i,n){n(72791);var t=n(36151),r=n(80184);i.Z=function(e){return(0,r.jsx)(t.Z,{sx:{py:1,fontSize:{xs:"12px",md:"15px"},width:"100%",marginTop:"10px",borderRadius:"10px",background:"linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",color:"white",fontWeight:700},children:e.text})}},91658:function(e,i,n){n.r(i),n.d(i,{default:function(){return re}});var t=n(74165),r=n(15861),s=n(29439),d=n(72791),o=n(68870),l=n(61889),a=n(56598),c=n(67394),u=n(53767),x=n(36520),p=n(13400),h=n(20890),f=n(90580),Z=n(57689),g=n(36151),j=n(80184);var v=function(e){return(0,j.jsx)(g.Z,{sx:{py:1,fontSize:{xs:"12px",md:"15px"},width:"100%",marginTop:"30px",borderTopLeftRadius:"10px",borderTopRightRadius:"0px",borderBottomRightRadius:"10px",borderBottomLeftRadius:"00px",background:"linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",color:"white",fontWeight:700},children:e.text})},m=n(93433),b=n(1413),y=n(55931),k=n(64387),w=n(35527),S=n(29818),R=n(99321),P=n(4834),C=n(29823),D=n(61134),F=n(65532),I=n(69596),T=n(26088),z=n(56488),B=n(75985),L=n(29002),W=d.forwardRef((function(e,i){return(0,j.jsx)(y.Z,(0,b.Z)({direction:"down",ref:i},e))})),A={display:"flex",flexDirection:"row",flexWrap:"wrap",marginTop:16},E={display:"flex",minWidth:0,overflow:"hidden"},q={display:"block",width:"auto",height:"100%"},M={display:"inline-flex",borderRadius:2,marginBottom:8,marginRight:8,width:"auto",height:200,boxSizing:"border-box"},N=(0,T.Z)(k.Z)({backgroundColor:"background.inputbg",margin:"5px",borderRadius:"5px"});function O(e){var i=d.useState(null===e||void 0===e?void 0:e.open),n=(0,s.Z)(i,2),l=n[0],a=n[1],c=d.useState([]),x=(0,s.Z)(c,2),f=x[0],Z=x[1],v=d.useState("File"),y=(0,s.Z)(v,2),k=y[0],T=y[1],O=d.useState(""),H=(0,s.Z)(O,2),V=H[0],U=H[1],J=d.useState([]),K=(0,s.Z)(J,2),Y=K[0],$=K[1],_=new FormData,G=null===e||void 0===e?void 0:e.nftsDetails,X=G._id,Q=G.address,ee=G.addressdetails,ie=G.productTotalPrice,ne=G.fileLink,te=G.description,re=G.name,se=G.mapaddress,de=(0,F.uI)({noClick:!0,noKeyboard:!0,onDrop:function(e){var i=e[0],n=i.size/1048576,t=null===i||void 0===i?void 0:i.path.split("."),r=null===t||void 0===t?void 0:t.pop();if(n>=20)return B.Am.error("Please choice file less then 20 MB"),!1;U(e[0]),["mov","mp4","avi","wmf","flv","webm"].includes(r)||Z(e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})))}}),oe=de.getRootProps,le=de.getInputProps,ae=de.open,ce=f.map((function(e){return(0,j.jsx)("div",{style:M,children:(0,j.jsx)("div",{style:E,children:(0,j.jsx)("img",{src:e.preview,style:q,alt:""})})},e.name)})),ue=(0,D.cI)({mode:"onChange"}),xe=ue.register,pe=ue.handleSubmit,he=ue.setValue,fe=ue.formState.errors;d.useEffect((function(){he("filelink",ne||""),he("name",re),he("productTotalPrice",ie),he("mapaddress",se),he("addressdetails",ee),he("description",te)}),[]);var Ze=function(){a(!1),e.modalFunc(!1)},ge=function(){var i=(0,r.Z)((0,t.Z)().mark((function i(n,r){var s,d;return(0,t.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:for(s in n)_.append(s,n[s]);return _.append("file",V),_.append("_id",X),_.append("walletAddress",Q),i.prev=4,i.next=7,(0,z.oF)(_);case 7:"ok"===(d=i.sent).status?(B.Am.success("Nft Data update successfully !"),setTimeout((function(){e.modalFunc(!1)}),2e3)):B.Am.error(null===d||void 0===d?void 0:d.message),i.next=14;break;case 11:i.prev=11,i.t0=i.catch(4),console.log("Nfts update error",i.t0);case 14:case"end":return i.stop()}}),i,null,[[4,11]])})));return function(e,n){return i.apply(this,arguments)}}();return(0,j.jsx)(w.Z,{children:(0,j.jsx)(S.Z,{TransitionComponent:W,open:l,onClose:function(){Ze()},maxWidth:"xs",fullWidth:!0,sx:{"& .css-twia2z-MuiPaper-root-MuiDialog-paper":{borderRadius:"10px",background:"background.secondary"}},children:(0,j.jsxs)(o.Z,{p:2,component:"form",onSubmit:pe(ge),children:[(0,j.jsx)(o.Z,{display:"flex",justifyContent:"end",children:(0,j.jsx)(p.Z,{onClick:function(){Ze()},sx:{float:"right",color:"text.seconary"},children:(0,j.jsx)(C.Z,{})})}),"File"===k&&(0,j.jsxs)(o.Z,(0,b.Z)((0,b.Z)({display:"flex",alignItems:"center",flexDirection:"column"},oe()),{},{children:[(0,j.jsx)("input",(0,b.Z)({},le())),(null===f||void 0===f?void 0:f.length)>0?(0,j.jsx)("aside",{style:A,children:ce}):(0,j.jsxs)(u.Z,{alignItems:"center",sx:{py:3,color:"text.secondary",cursor:"pointer"},onClick:function(){ae()},children:[(0,j.jsx)(I.Z,{fontSize:"large"}),(0,j.jsx)(h.Z,{sx:{fontWeight:"600",fontSize:"18px"},children:"Browse Files"}),(0,j.jsx)(h.Z,{sx:{fontWeight:"600",fontSize:"14px"},children:V?"File save":"Drag and drop files here"})]})]})),(0,j.jsxs)(o.Z,{py:1,children:[(0,j.jsx)(h.Z,{sx:{color:"text.primery"},children:"Type "}),(0,j.jsxs)(R.Z,{sx:{height:"39px",borderRadius:"5px",backgroundColor:"background.inputbg","& .MuiOutlinedInput-notchedOutline":{border:"none"}},value:k,onChange:function(e){return T(e.target.value)},fullWidth:!0,inputProps:{MenuProps:{MenuListProps:{}}},children:[(0,j.jsx)(N,{value:"File",children:"File"}),(0,j.jsx)(N,{value:"Link",children:"Link"})]})]}),"Link"===k&&(0,j.jsxs)(o.Z,{py:1,children:[(0,j.jsx)(h.Z,{children:"Link "}),(0,j.jsx)(P.ZP,{placeholder:"Enter link",type:"text",sx:{backgroundColor:"background.inputbg",width:"100%",borderRadius:"5px",px:2,py:.5}})]}),(0,j.jsxs)(o.Z,{py:1,children:[(0,j.jsx)(h.Z,{children:"Title "}),(0,j.jsx)(P.ZP,(0,b.Z)((0,b.Z)({},xe("name",{required:!0})),{},{placeholder:"Enter title",type:"text",sx:{backgroundColor:"background.inputbg",width:"100%",borderRadius:"5px",px:2,py:.5}})),fe.name&&(0,j.jsx)(h.Z,{sx:{color:"red",fontSize:"14px"},children:"This field is required *"})]}),(0,j.jsxs)(o.Z,{py:1,children:[(0,j.jsx)(h.Z,{children:"Price"}),(0,j.jsx)(P.ZP,(0,b.Z)((0,b.Z)({},xe("productTotalPrice",{required:!0})),{},{placeholder:"Enter Price",type:"text",sx:{backgroundColor:"background.inputbg",color:"gray",width:"100%",borderRadius:"5px",px:2,py:.5}})),fe.productTotalPrice&&(0,j.jsx)(h.Z,{sx:{color:"red",fontSize:"14px"},children:"This field is required *"})]}),(0,j.jsxs)(o.Z,{py:1,children:[(0,j.jsx)(h.Z,{children:"Description"}),(0,j.jsx)(P.ZP,(0,b.Z)((0,b.Z)({},xe("description",{required:!0})),{},{placeholder:"Enter description",type:"text",sx:{backgroundColor:"background.inputbg",width:"100%",borderRadius:"5px",px:2,py:.5}})),fe.description&&(0,j.jsx)(h.Z,{sx:{color:"red",fontSize:"14px"},children:"This field is required *"})]}),(0,j.jsxs)(o.Z,{py:1,children:[(0,j.jsx)(h.Z,{children:"Address"}),(0,j.jsx)(P.ZP,(0,b.Z)((0,b.Z)({},xe("mapaddress",{required:!0})),{},{placeholder:"Enter address",type:"text",sx:{backgroundColor:"background.inputbg",width:"100%",borderRadius:"5px",px:2,py:.5}})),fe.mapaddress&&(0,j.jsx)(h.Z,{sx:{color:"red",fontSize:"14px"},children:"This field is required *"})]}),(0,j.jsxs)(o.Z,{py:1,children:[(0,j.jsx)(h.Z,{children:"Address details *"}),(0,j.jsx)(P.ZP,(0,b.Z)((0,b.Z)({},xe("addressdetails",{required:!0})),{},{multiline:!0,minRows:2,placeholder:"Enter address details",type:"text",sx:{backgroundColor:"background.inputbg",width:"100%",borderRadius:"5px",px:2,py:.5}}))]}),(null===Y||void 0===Y?void 0:Y.length)>0?null===Y||void 0===Y?void 0:Y.map((function(e,i){var n=e.id;return(0,j.jsxs)(o.Z,{py:1,children:[(0,j.jsx)(h.Z,{children:"Metadata *"}),(0,j.jsx)(P.ZP,(0,b.Z)((0,b.Z)({},xe("matadata".concat(n))),{},{multiline:!0,minRows:2,placeholder:"Enter matadata",type:"text",sx:{backgroundColor:"background.inputbg",width:"100%",borderRadius:"5px",px:2,py:.5}}))]},i+10*Math.random())})):"",(0,j.jsx)(o.Z,{sx:{width:"50%",display:"flex",justifyContent:"center",alignItems:"center"},onClick:function(){Y.length<10&&$([].concat((0,m.Z)(Y),[{id:Y.length}]))},children:(0,j.jsx)(L.Z,{text:"Add MetaData"})}),(0,j.jsx)(o.Z,{py:1,display:"flex",justifyContent:"center",children:(0,j.jsx)(g.Z,{type:"submit",sx:{mt:2,fontSize:"15px",width:"100%",borderRadius:"5px",background:" linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",color:"white",fontWeight:700,boxShadow:2},children:"Edit"})})]})})})}var H=n(59434),V=n(56305),U=n(72430),J=n(60786),K=n(87488),Y=n(17237),$=n(3746),_=n(47401),G=n(60042),X=n(56580),Q=n(89748),ee=n(76943),ie=function(e){var i=e.ceilSlice,n=(0,H.I0)(),a=(0,d.useState)(!1),c=(0,s.Z)(a,2),u=c[0],f=c[1],g=(0,d.useState)(0),v=(0,s.Z)(g,2),m=v[0],b=v[1],y=(0,d.useState)(!1),k=(0,s.Z)(y,2),w=k[0],S=k[1],R=(0,d.useState)(0),P=(0,s.Z)(R,2),C=P[0],D=P[1],F=(0,d.useState)(0),I=(0,s.Z)(F,2),T=I[0],L=I[1],W=(0,d.useState)(0),A=(0,s.Z)(W,2),E=A[0],q=A[1],M=(0,d.useState)(!1),N=(0,s.Z)(M,2),O=N[0],V=N[1],ie=(0,d.useState)(!1),ne=(0,s.Z)(ie,2),te=ne[0],re=ne[1],se=(0,d.useState)(0),de=(0,s.Z)(se,2),oe=de[0],le=de[1],ae=(0,Z.UO)(),ce=function(){var e=ae.id,n=null===i||void 0===i?void 0:i.userdetails.id;(0,z.Vk)(e).then((function(e){e.data.includes(n)?S(!0):S(!1),D(e.data.length)}))},ue=function(){var e=ae.id,n=null===i||void 0===i?void 0:i.userdetails.id;(0,z.Hc)(e).then((function(e){e.data.likesList.includes(n)?f(!0):f(!1),b(e.data.likesList.length)}))},xe=function(){var e=(0,r.Z)((0,t.Z)().mark((function e(){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,z.KN)({userId:null===i||void 0===i?void 0:i.userdetails.id,nftId:ae.id});case 2:e.sent&&(B.Am.success("Your vote cast for this NFT"),pe());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),pe=function(){var e=(0,r.Z)((0,t.Z)().mark((function e(){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,z.cX)(ae.id);case 2:n=e.sent,q(n.data.length),n.data.includes(null===i||void 0===i?void 0:i.userdetails.id)?V(!0):V(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),he=function(){var e=(0,r.Z)((0,t.Z)().mark((function e(r){var s,d;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=ae.id,d=null===i||void 0===i?void 0:i.userdetails.id,e.next=4,(0,z.OG)({userId:d,nftId:s});case 4:e.sent&&(B.Am.success("This NFT add in your Follow List"),fe(),n((0,ee.bi)(s)));case 6:case"end":return e.stop()}}),e)})));return function(i){return e.apply(this,arguments)}}(),fe=function(){var e=ae.id,n=null===i||void 0===i?void 0:i.userdetails.id;(0,z.Hc)(e).then((function(e){e.data.follows.includes(n)?re(!0):re(!1),le(e.data.follows.length)}))};return(0,d.useEffect)((function(){ue(),ce(),function(){var e=ae.id,n=null===i||void 0===i?void 0:i.userdetails.id;(0,z.bh)({userId:n,nftId:e}).then((function(i){return(0,z.MF)(e).then((function(e){return L(e.data)}))}))}(),pe(),fe()}),[]),(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(o.Z,{sx:{color:"white",p:2,mt:7,background:"linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",borderRadius:"10px"},children:[(0,j.jsx)(h.Z,{sx:{fontSize:"16px",fontWeight:"600"},children:"Attributes"}),(0,j.jsxs)(l.ZP,{item:!0,container:!0,xs:12,spacing:1,pt:2,children:[(0,j.jsx)(l.ZP,{item:!0,xs:12,sm:2,children:(0,j.jsxs)(o.Z,{p:2,sx:{borderRadius:"10px",display:"flex",alignItems:"center"},children:[(0,j.jsx)(x.Z,{title:"Like",placement:"left",children:(0,j.jsx)(p.Z,{sx:{color:"white"},children:u?(0,j.jsx)(J.Z,{}):(0,j.jsx)(U.Z,{onClick:function(){var e=ae.id,n=null===i||void 0===i?void 0:i.userdetails.id;(0,z.q2)({userId:n,nftId:e}).then((function(e){B.Am.success("You Like this NFT"),ue()}))}})})}),(0,j.jsx)(h.Z,{children:m})]})}),(0,j.jsx)(l.ZP,{item:!0,xs:12,sm:2,children:(0,j.jsxs)(o.Z,{p:2,sx:{borderRadius:"10px",display:"flex",alignItems:"center"},children:[(0,j.jsx)(x.Z,{title:"Favorite",placement:"left",children:(0,j.jsx)(p.Z,{sx:{color:"white"},children:w?(0,j.jsx)(Y.Z,{}):(0,j.jsx)(K.Z,{onClick:function(){var e=ae.id,t=null===i||void 0===i?void 0:i.userdetails.id;(0,z.Nt)({userId:t,nftId:e}).then((function(i){B.Am.success("This NFT add in your Favorite List"),ce(),n((0,ee.pw)(e))}))}})})}),(0,j.jsx)(h.Z,{children:C})]})}),(0,j.jsx)(l.ZP,{item:!0,xs:12,sm:2,children:(0,j.jsxs)(o.Z,{p:2,sx:{borderRadius:"10px",display:"flex",alignItems:"center"},children:[(0,j.jsx)(x.Z,{title:"Vote",placement:"left",children:(0,j.jsx)(p.Z,{sx:{color:"white"},children:O?(0,j.jsx)(_.Z,{}):(0,j.jsx)(G.Z,{onClick:xe})})}),(0,j.jsx)(h.Z,{children:E})]})}),(0,j.jsx)(l.ZP,{item:!0,xs:12,sm:2,children:(0,j.jsxs)(o.Z,{p:2,sx:{borderRadius:"10px",display:"flex",alignItems:"center"},children:[(0,j.jsx)(x.Z,{title:"Follow",placement:"left",children:(0,j.jsx)(p.Z,{sx:{color:"white"},children:te?(0,j.jsx)(Q.Z,{}):(0,j.jsx)(X.Z,{onClick:he})})}),(0,j.jsx)(h.Z,{children:oe})]})}),(0,j.jsx)(l.ZP,{item:!0,xs:12,sm:2,children:(0,j.jsxs)(o.Z,{p:2,sx:{borderRadius:"10px",display:"flex",alignItems:"center"},children:[(0,j.jsx)(x.Z,{title:"Views",placement:"left",children:(0,j.jsx)(p.Z,{sx:{color:"white"},children:(0,j.jsx)($.Z,{})})}),(0,j.jsx)(h.Z,{children:T})]})})]})]})})},ne=n(91689),te=n(55794);function re(){var e,i=(0,H.I0)(),n=d.useState(!1),g=(0,s.Z)(n,2),m=g[0],b=g[1],y=(0,H.v9)((function(e){return e})).ceilSlice,k=y.nftdetails,w=y.userdetails,S=d.useState(!1),R=(0,s.Z)(S,2),P=R[0],C=R[1],D=(0,Z.s0)(),F=(0,Z.UO)(),I=["mov","mp4","avi","wmf","flv","webm"],T=function(){var e=(0,r.Z)((0,t.Z)().mark((function e(){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!F){e.next=7;break}return b(!0),e.next=4,(0,z.Dv)(null===F||void 0===F?void 0:F.id);case 4:n=e.sent,i((0,ee.RV)(n)),b(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();d.useEffect((function(){T()}),[]);var B=null===k||void 0===k||null===(e=k.file)||void 0===e?void 0:e.split("."),L=null===B||void 0===B?void 0:B.pop(),W=null!==k&&void 0!==k&&k.file||null!==k&&void 0!==k&&k.filelink?null!==k&&void 0!==k&&k.filelink?null===k||void 0===k?void 0:k.filelink:null===k||void 0===k?void 0:k.file:null===k||void 0===k?void 0:k.capturesImage;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(te.Z,{loading:m}),(0,j.jsxs)(a.Z,{maxWidth:"lg",sx:{pt:14},children:[P&&(0,j.jsx)(O,{open:P,modalFunc:function(e){C(e),T()},nftsDetails:k}),(0,j.jsx)(o.Z,{sx:{display:"flex ",alignItems:"center",p:2,boxShadow:1,backgroundColor:"background.secondary"},children:(0,j.jsxs)(l.ZP,{container:!0,spacing:5,p:3,children:[(0,j.jsx)(l.ZP,{item:!0,xs:12,md:5.5,children:(0,j.jsxs)(o.Z,{sx:{width:"100%",height:L?{xs:"240",md:"450px"}:"100%",padding:"2px",borderRadius:"30px",background:L?"":" linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)"},children:[null!==I&&void 0!==I&&I.includes(L)?"":(0,j.jsx)(o.Z,{sx:{width:"100%",height:"100%",minHeight:{xs:"300px",md:"500px"},backgroundImage:W?"url(".concat(V.J,"/upload/").concat(W,")"):"url(".concat(ne,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",borderRadius:"30px"}}),null!==I&&void 0!==I&&I.includes(L)?(0,j.jsx)(o.Z,{sx:{borderRadius:"5px",overflow:"hidden"},children:(0,j.jsx)("video",{src:"".concat(V.J,"/upload/").concat(null===k||void 0===k?void 0:k.file),width:"100%",border:"2px solid blue",controls:"controls",autoPlay:!1,style:{minHeight:"350px",maxHeight:"370px"}})}):""]})}),(0,j.jsx)(l.ZP,{item:!0,xs:12,md:6.5,children:(0,j.jsxs)(o.Z,{children:[(0,j.jsxs)(u.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,children:[(0,j.jsx)(o.Z,{children:(0,j.jsx)(x.Z,{title:"Back",placement:"top",children:(0,j.jsx)(p.Z,{onClick:function(){D(-1)},sx:{background:"linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)","&:hover":{background:"linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)"}},children:(0,j.jsx)(c.Z,{fontSize:"small"})})})}),(0,j.jsx)(o.Z,{children:(0,j.jsx)(x.Z,{title:"Share",placement:"top",children:(0,j.jsx)(p.Z,{sx:{background:"linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)","&:hover":{background:"linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)"}},children:(0,j.jsx)(f.Z,{fontSize:"small"})})})})]}),(0,j.jsxs)(h.Z,{variant:"h3",py:3,children:[(0,j.jsx)("span",{style:{textDecoration:"underline"},children:null===k||void 0===k?void 0:k.name})," "]}),(0,j.jsx)(h.Z,{color:"text.secondary",variant:"body2",py:3,children:null===k||void 0===k?void 0:k.description}),(0,j.jsxs)(o.Z,{sx:{py:2,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,j.jsxs)(o.Z,{children:[(0,j.jsx)(h.Z,{sx:{fontSize:"25px"},children:"Current Price"}),(0,j.jsx)(h.Z,{sx:{fontSize:"20px",fontWeight:"600"},children:null!==k&&void 0!==k&&k.productTotalPrice?(null===k||void 0===k?void 0:k.productTotalPrice)+"$":"0 $"})]}),(null===w||void 0===w?void 0:w.id)===(null===k||void 0===k?void 0:k.user)?(0,j.jsx)(o.Z,{onClick:function(){C(!0)},sx:{width:"50%"},children:(0,j.jsx)(v,{text:"Edit"})}):(0,j.jsx)(o.Z,{sx:{width:"50%"},children:(0,j.jsx)(v,{text:"Buy now"})})]}),(0,j.jsx)(ie,{ceilSlice:y})]})})]})})]})]})}},91689:function(e,i,n){e.exports=n.p+"static/media/bloctech.b504c6946de55390a53d.jpg"}}]);
//# sourceMappingURL=658.6f986744.chunk.js.map