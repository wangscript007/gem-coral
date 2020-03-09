/** layui-v2.5.6 MIT License By https://www.layui.com */
;layui.define("layer",function(f){var h=layui.$,k=layui.layer,e=layui.hint(),b=layui.device(),m="form",d=".layui-form",o="layui-this",n="layui-show",g="layui-hide",j="layui-disabled",i=function(){this.config={verify:{required:[/[\S]+/,"必填项不能为空"],phone:[/^1\d{10}$/,"请输入正确的手机号"],email:[/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,"邮箱格式不正确"],url:[/(^#)|(^http(s*):\/\/[^\s]+\.[^\s]+)/,"链接格式不正确"],number:function(q){if(!q||isNaN(q)){return"只能填写数字"}},date:[/^(\d{4})[-\/](\d{1}|0\d{1}|1[0-2])([-\/](\d{1}|0\d{1}|[1-2][0-9]|3[0-1]))*$/,"日期格式不正确"],identity:[/(^\d{15}$)|(^\d{17}(x|X|\d)$)/,"请输入正确的身份证号"]}}};i.prototype.set=function(q){var r=this;h.extend(true,r.config,q);return r};i.prototype.verify=function(q){var r=this;h.extend(true,r.config.verify,q);return r};i.prototype.on=function(q,r){return layui.onevent.call(this,m,q,r)};i.prototype.val=function(r,q){var s=this,t=h(d+'[lay-filter="'+r+'"]');t.each(function(u,v){var w=h(this);layui.each(q,function(x,z){var A=w.find('[name="'+x+'"]'),y;if(!A[0]){return}y=A[0].type;if(y==="checkbox"){A[0].checked=z}else{if(y==="radio"){A.each(function(){if(this.value==z){this.checked=true}})}else{A.val(z)}}})});a.render(null,r);return s.getValue(r)};i.prototype.getValue=function(r,u){u=u||h(d+'[lay-filter="'+r+'"]').eq(0);var s={},t={},q=u.find("input,select,textarea");layui.each(q,function(v,x){x.name=(x.name||"").replace(/^\s*|\s*&/,"");if(!x.name){return}if(/^.*\[\]$/.test(x.name)){var w=x.name.match(/^(.*)\[\]$/g)[0];s[w]=s[w]|0;x.name=x.name.replace(/^(.*)\[\]$/,"$1["+(s[w]++)+"]")}if(/^checkbox|radio$/.test(x.type)&&!x.checked){return}t[x.name]=x.value});return t};i.prototype.render=function(s,r){var t=this,u=h(d+function(){return r?('[lay-filter="'+r+'"]'):""}()),q={select:function(){var x="请选择",D="layui-form-select",w="layui-select-title",z="layui-select-none",B="",v,A=u.find("select"),y=function(F,E){if(!h(F.target).parent().hasClass(w)||E){h("."+D).removeClass(D+"ed "+D+"up");v&&B&&v.val(B)}v=null},C=function(N,F,L){var P=h(this),M=N.find("."+w),O=M.find("input"),I=N.find("dl"),R=I.children("dd"),J=this.selectedIndex,H;if(F){return}var K=function(){var U=N.offset().top+N.outerHeight()+5-c.scrollTop(),T=I.outerHeight();J=P[0].selectedIndex;N.addClass(D+"ed");R.removeClass(g);H=null;R.eq(J).addClass(o).siblings().removeClass(o);if(U+T>c.height()&&U>=T){N.addClass(D+"up")}Q()},G=function(T){N.removeClass(D+"ed "+D+"up");O.blur();H=null;if(T){return}E(O.val(),function(V){var U=P[0].selectedIndex;if(V){B=h(P[0].options[U]).html();if(U===0&&B===O.attr("placeholder")){B=""}O.val(B||"")}})},Q=function(){var V=I.children("dd."+o);if(!V[0]){return}var W=V.position().top,U=I.height(),T=V.height();if(W>U){I.scrollTop(W+I.scrollTop()-U+T-5)}if(W<0){I.scrollTop(W+I.scrollTop()-5)}};M.on("click",function(T){N.hasClass(D+"ed")?(G()):(y(T,true),K());I.find("."+z).remove()});M.find(".layui-edge").on("click",function(){O.focus()});O.on("keyup",function(U){var T=U.keyCode;if(T===9){K()}}).on("keydown",function(V){var U=V.keyCode;if(U===9){G()}var T=function(W,aa){var Z,Y;V.preventDefault();var X=function(){var ad=I.children("dd."+o);if(I.children("dd."+g)[0]&&W==="next"){var ac=I.children("dd:not(."+g+",."+j+")"),ab=ac.eq(0).index();if(ab>=0&&ab<ad.index()&&!ac.hasClass(o)){return ac.eq(0).prev()[0]?ac.eq(0).prev():I.children(":last")}}if(aa&&aa[0]){return aa}if(H&&H[0]){return H}return ad}();Y=X[W]();Z=X[W]("dd:not(."+g+")");if(!Y[0]){return H=null}H=X[W]();if((!Z[0]||Z.hasClass(j))&&H[0]){return T(W,H)}Z.addClass(o).siblings().removeClass(o);Q()};if(U===38){T("prev")}if(U===40){T("next")}if(U===13){V.preventDefault();I.children("dd."+o).trigger("click")}});var E=function(W,X,T){var U=0;layui.each(R,function(){var Z=h(this),aa=Z.text(),Y=aa.indexOf(W)===-1;if(W===""||(T==="blur")?W!==aa:Y){U++}T==="keyup"&&Z[Y?"addClass":"removeClass"](g)});var V=U===R.length;return X(V),V};var S=function(V){var T=this.value,U=V.keyCode;if(U===9||U===13||U===37||U===38||U===39||U===40){return false}E(T,function(W){if(W){I.find("."+z)[0]||I.append('<p class="'+z+'">无匹配项</p>')}else{I.find("."+z).remove()}},"keyup");if(T===""){I.find("."+z).remove()}Q()};if(L){O.on("keyup",S).on("blur",function(U){var T=P[0].selectedIndex;v=O;B=h(P[0].options[T]).html();if(T===0&&B===O.attr("placeholder")){B=""}setTimeout(function(){E(O.val(),function(V){B||O.val("")},"blur")},200)})}R.on("click",function(){var V=h(this),U=V.attr("lay-value");var T=P.attr("lay-filter");if(V.hasClass(j)){return false}if(V.hasClass("layui-select-tips")){O.val("")}else{O.val(V.text());V.addClass(o)}V.siblings().removeClass(o);P.val(U).removeClass("layui-form-danger");P.trigger("change");layui.event.call(this,m,"select("+T+")",{elem:P[0],value:U,othis:N});G(true);return false});N.find("dl>dt").on("click",function(T){return false});h(document).off("click",y).on("click",y)};A.each(function(J,M){var E=h(this),F=E.next("."+D),G=this.disabled,O=M.value,H=h(M.options[M.selectedIndex]),I=M.options[0];if(typeof E.attr("lay-ignore")==="string"){return E.show()
    }var K=typeof E.attr("lay-search")==="string",N=I?(I.value?x:(I.innerHTML||x)):x;var L=h(['<div class="'+(K?"":"layui-unselect ")+D,(G?" layui-select-disabled":"")+'">','<div class="'+w+'">',('<input type="text" placeholder="'+N+'" '+('value="'+(O?H.html():"")+'"')+((!G&&K)?"":" readonly")+' class="layui-input'+(K?"":" layui-unselect")+(G?(" "+j):"")+'">'),'<i class="layui-edge"></i></div>','<dl class="layui-anim layui-anim-upbit'+(E.find("optgroup")[0]?" layui-select-group":"")+'">',function(Q){var P=[];layui.each(Q,function(R,S){if(R===0&&!S.value){P.push('<dd lay-value="" class="layui-select-tips">'+(S.innerHTML||x)+"</dd>")}else{if(S.tagName.toLowerCase()==="optgroup"){P.push("<dt>"+S.label+"</dt>")}else{P.push('<dd lay-value="'+S.value+'" class="'+(O===S.value?o:"")+(S.disabled?(" "+j):"")+'">'+S.innerHTML+"</dd>")}}});P.length===0&&P.push('<dd lay-value="" class="'+j+'">没有选项</dd>');return P.join("")}(E.find("*"))+"</dl>","</div>"].join(""));F[0]&&F.remove();E.after(L);C.call(this,L,G,K)})},checkbox:function(){var x={checkbox:["layui-form-checkbox","layui-form-checked","checkbox"],_switch:["layui-form-switch","layui-form-onswitch","switch"]},v=u.find("input[type=checkbox]"),w=function(A,z){var y=h(this);A.on("click",function(){var B=y.attr("lay-filter"),C=(y.attr("lay-text")||"").split("|");if(y[0].disabled){return}y[0].checked?(y[0].checked=false,A.removeClass(z[1]).find("em").text(C[1])):(y[0].checked=true,A.addClass(z[1]).find("em").text(C[0]));layui.event.call(y[0],m,z[2]+"("+B+")",{elem:y[0],value:y[0].value,othis:A})})};v.each(function(C,y){var z=h(this),G=z.attr("lay-skin"),F=(z.attr("lay-text")||"").split("|"),B=this.disabled;if(G==="switch"){G="_"+G}var E=x[G]||x.checkbox;if(typeof z.attr("lay-ignore")==="string"){return z.show()}var A=z.next("."+E[0]),D=h(['<div class="layui-unselect '+E[0],(y.checked?(" "+E[1]):""),(B?" layui-checkbox-disbaled "+j:""),'"',(G?' lay-skin="'+G+'"':""),">",function(){var I=y.title.replace(/\s/g,""),H={checkbox:[(I?("<span>"+y.title+"</span>"):""),'<i class="layui-icon layui-icon-ok"></i>'].join(""),_switch:"<em>"+((y.checked?F[0]:F[1])||"")+"</em><i></i>"};return H[G]||H["checkbox"]}(),"</div>"].join(""));A[0]&&A.remove();z.after(D);w.call(this,D,E)})},radio:function(){var w="layui-form-radio",y=["&#xe643;","&#xe63f;"],x=u.find("input[type=radio]"),v=function(A){var B=h(this),z="layui-anim-scaleSpring";A.on("click",function(){var D=B[0].name,C=B.parents(d);var F=B.attr("lay-filter");var E=C.find("input[name="+D.replace(/(\.|#|\[|\])/g,"\\$1")+"]");if(B[0].disabled){return}layui.each(E,function(){var G=h(this).next("."+w);this.checked=false;G.removeClass(w+"ed");G.find(".layui-icon").removeClass(z).html(y[1])});B[0].checked=true;A.addClass(w+"ed");A.find(".layui-icon").addClass(z).html(y[0]);layui.event.call(B[0],m,"radio("+F+")",{elem:B[0],value:B[0].value,othis:A})})};x.each(function(C,B){var E=h(this),z=E.next("."+w),D=this.disabled;if(typeof E.attr("lay-ignore")==="string"){return E.show()}z[0]&&z.remove();var A=h(['<div class="layui-unselect '+w,(B.checked?(" "+w+"ed"):""),(D?" layui-radio-disbaled "+j:"")+'">','<i class="layui-anim layui-icon">'+y[B.checked?0:1]+"</i>","<div>"+function(){var F=B.title||"";if(typeof E.next().attr("lay-radio")==="string"){F=E.next().html();E.next().remove()}return F}()+"</div>","</div>"].join(""));E.after(A);v.call(this,A)})}};s?(q[s]?q[s]():e.error("不支持的"+s+"表单渲染")):layui.each(q,function(v,w){w()});return t};var l=function(){var x=null,w=a.config.verify,v="layui-form-danger",y={},u=h(this),t=u.parents(d),q=t.find("*[lay-verify]"),r=u.parents("form")[0],s=u.attr("lay-filter");layui.each(q,function(A,B){var D=h(this),z=D.attr("lay-verify").split("|"),E=D.attr("lay-verType"),C=D.val();D.removeClass(v);layui.each(z,function(J,H){var G,F="",I=typeof w[H]==="function";if(w[H]){var G=I?F=w[H](C,B):!w[H][0].test(C);F=F||w[H][1];if(H==="required"){F=D.attr("lay-reqText")||F}if(G){if(E==="tips"){k.tips(F,function(){if(typeof D.attr("lay-ignore")!=="string"){if(B.tagName.toLowerCase()==="select"||/^checkbox|radio$/.test(B.type)){return D.next()}}return D}(),{tips:[1,D.attr("lay-bg")?D.attr("lay-bg"):"#ff4c4c"]})}else{if(E==="alert"){k.alert(F,{title:"提示",shadeClose:true})}else{k.msg(F,{icon:5,shift:6})}}if(!b.android&&!b.ios){setTimeout(function(){B.focus()},7)}D.addClass(v);return x=true}}});if(x){return x}});if(x){return false}y=a.getValue(null,t);return layui.event.call(this,m,"submit("+s+")",{elem:this,form:r,field:y})};var a=new i(),p=h(document),c=h(window);a.render();p.on("reset",d,function(){var q=h(this).attr("lay-filter");setTimeout(function(){a.render(null,q)},50)});p.on("submit",d,l).on("click","*[lay-submit]",l);f(m,a)});