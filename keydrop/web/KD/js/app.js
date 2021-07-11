var formatNumber=(value,minimumFractionDigits)=>new Intl.NumberFormat(document.documentElement.lang,{minimumFractionDigits,}).format(value)
var formatCurrency=(value,currency)=>new Intl.NumberFormat(document.documentElement.lang,{style:'currency',currency:currency||window.__userInitialData.currency,}).format(value).replace('zł','PLN')
var animateNumber=function(el,to){const obj={value:Math.max(0,parseFloat(el.textContent))}
TweenMax.to(obj,0.5,{value:to,onUpdate(){el.textContent=formatNumber(obj.value)},})}
var animateInt=function(el,to){const obj={value:Math.max(0,parseInt(el.dataset.__animateIntValue||el.textContent)),}
TweenMax.to(obj,0.5,{value:to,onUpdate(){el.textContent=formatNumber(Math.round(obj.value))},onComplete(){el.dataset.__animateIntValue=obj.value},})}
var animateCurrency=function(el,to){const obj={value:Math.max(0,parseFloat(el.dataset.value))}
TweenMax.to(obj,1,{value:to,onUpdate(){el.textContent=formatCurrency(obj.value)},onComplete(){el.dataset.value=to},})}
var updateGlobalCoinBalance=function(value){Array.from(document.querySelectorAll('.saldo_coins'),(el)=>animateInt(el,value))}
var fetchAndUpdateCoinBalance=function(){fetch(SITE_URL+'Event/Event/balance/').then((r)=>r.json()).then((r)=>updateGlobalCoinBalance(r.coin))}
function uploadDropDown(){var dragArea=$('.js-drag-area')
var fileInput=$('.js-drag-input')
var img=$('.js-drag-img')
$(dragArea).addClass('js-drag-loaded')
dragArea.on('dragover',function(e){e.preventDefault()
dragArea.addClass('border-gold')
console.log('DRAG OVER!')})
dragArea.on('dragleave',function(e){e.preventDefault()
dragArea.removeClass('border-gold')
console.log('DRAG LEAVE!')})
var dragFile=null
dragArea.on('drop',function(e){e.preventDefault()
dragFile=e.originalEvent.dataTransfer.files[0]
var reader=new FileReader()
reader.onload=function(e){img.attr('src',e.target.result)
img.removeClass('hidden')}
reader.readAsDataURL(dragFile)
$('input.js-drag-input').prop('files',e.originalEvent.dataTransfer.files).change()})
fileInput.on('change',function(){var reader=new FileReader()
reader.onload=function(e){img.attr('src',e.target.result)
img.removeClass('hidden')
dragFile=null}
reader.readAsDataURL($(this)[0].files[0])})}
$(function(){$('body').on('dragover','.js-drag-area',function(){if(!$(this).hasClass('js-drag-loaded')){uploadDropDown(this)}})})
function zamien_bg_na_casse($bg){if($bg==1)return 'text-1'
if($bg==2)return 'text-2'
if($bg==3)return 'text-3'
if($bg==4)return 'text-4'
if($bg==5)return 'text-5'
if($bg==6)return 'text-6'}
function zamien_bg_to_hex($bg){if($bg==1)return '#7c95ad'
if($bg==2)return '#5370e6'
if($bg==3)return '#df5dee'
if($bg==4)return '#a41aff'
if($bg==5)return '#ff445d'
if($bg==6)return '#dcae64'}
function bg_skins($bg){$bg=parseInt($bg)
if($bg==1)return '#b0c3d9'
if($bg==2)return '#5e98d9'
if($bg==3)return '#4b69ff'
if($bg==4)return '#8847ff'
if($bg==5)return '#d32ce6'
if($bg==6)return '#eb4b4b'
if($bg==7)return '#e4ae39'}
function escapeHtml(text){var map={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;',}
return text.replace(/[&<>"']/g,function(m){return map[m]})}
function roundNumber(num,scale){if(!(''+num).includes('e')){return+(Math.round(num+'e+'+scale)+'e-'+scale)}else{var arr=(''+num).split('e')
var sig=''
if(+arr[1]+scale>0){sig='+'}
return+(Math.round(+arr[0]+'e'+sig+(+arr[1]+scale))+'e-'+scale)}}
function load_view_payment(view){$('#payment-method .method li a').removeClass('border-gold pointer-events-none').find('.checked-class').hide()
$(`#payment-method .method li a[data-view="${view}"]`).addClass('border-gold pointer-events-none').find('.checked-class').show()
$('#widok-payment').load(SITE_URL+'panel/Profil/payment/?widok='+view)}
function loadInitialPaymentView(view){if(view!=='payment')return
const paymentView=new URLSearchParams(document.location.search).get('method')
load_view_payment(paymentView||$('#payment-method .method li a').data('view'))}
let currentProfileView=''
function load_view(view){if(view===currentProfileView)loadInitialPaymentView(view)
if(!view||view===currentProfileView)return
currentProfileView=view
if(view=='my_winner'){$('#my_account').show()
$('#load-views').html('')}else{$('#profile-page-content .pr__nav-link').removeClass('is-active')
$(`#profile-page-content .pr__nav-link[data-view="${view}"`).addClass('is-active')
$('#my_account').hide()
$('#load-views').load(SITE_URL+'panel/Profil/'+view,()=>loadInitialPaymentView(view))}}
const loadViews=()=>{const params=new URLSearchParams(document.location.search)
const profileView=params.get('p')
load_view(profileView)}
loadViews()
window.addEventListener('popstate',loadViews)
$('body').on('click','#payment-method .method li a',function(e){e.preventDefault()
const view=$(this).data('view')
if(view){load_view_payment(view)
const url=new URL(document.location)
url.searchParams.set('method',view)
history.pushState(null,'',url)}})
$('body').on('click','#profile-page-content .pr__nav-link, .change-profile-view',function(e){e.preventDefault()
const view=$(this).data('view')
load_view(view)
const url=new URL(document.location)
url.searchParams.set('p',view)
url.searchParams.delete('method')
history.pushState(null,'',url.toString())})
$('body').on('click','#profile-page-content .menu-link',function(){$('#profile-page-content .menu-link').removeClass('border-gold')
$(this).addClass('border-gold')
$('#profile-page-content .game-items-grid .game-item').show()
var $type=$(this).data('type')
$('#profile-page-content .game-items-grid .game-item').each(function(){if($(this).data('type')!=$type){$(this).hide()}})})
function potwierdz_odbior($id_loser){open_modal('confirm-modal')
$('#confirm-modal').find('.tak').data('status',$id_loser)}
$('body').on('click','.tak',function(){var $id_loser=$(this).data('status')
$.post(SITE_URL+'/panel/zmien_status',{ID:$id_loser},function(data){if(data==0){new Toast({type:'failure',title:lang_title[20],message:lang_title[2],duration:6000,})}else{console.log($id_loser)
$('body').find('#profile-page-content').find('#g-item-'+$id_loser).find('.yours_key').find('.text-white').html(data)
$('body').find('#profile-page-content').find('#g-item-'+$id_loser).find('.yours_key').show()
$('body').find('#profile-page-content').find('#g-item-'+$id_loser).find('.missed-section').hide()
$('body').find('#profile-page-content').find('#g-item-'+$id_loser).find('.copy-section').find('.js-copy-btn').attr('data-copy-text',data)
$('body').find('#profile-page-content').find('#g-item-'+$id_loser).find('.copy-section').show()
MicroModal.close('confirm-modal')}})})
function zmien_promo_code(){var promo_code=$('body').find('#promocode').val()
$.post(SITE_URL+'/panel/zapisz_promo_code',{promo_code:promo_code,}).done(function(data){var d=JSON.parse(data)
if(d.status=='1'){new Toast({type:'success',title:lang_title[21],message:d.info,duration:6000,})
$('body').find('#affiliate-url').html(SITE_URL+'R/'+promo_code)}else{new Toast({type:'failure',title:lang_title[20],message:d.info,duration:6000,})}})}
function sprawdz_lvl(){$.get(SITE_URL+'/Free_money/check_lvl',function(data){if(Number(data)>=1){new Toast({type:'success',title:lang_title[21],message:lang_title[36],duration:6000,})}else{open_modal('check-lvl-modal')}})}
function sprawdz_nick(){$.get(SITE_URL+'Free_money/check_nick',function(data){if(data==1){new Toast({type:'success',title:lang_title[21],message:lang_title[4],duration:6000,})}else{open_modal('check-nick-modal')}})}
function sprawdz_avatar(){$.get(SITE_URL+'Free_money/check_avatar',function(data){if(data==1){new Toast({type:'success',title:lang_title[21],message:lang_title[6],duration:6000,})}else{open_modal('check-avatar-modal')}})}
$('body').on('click','.case-grid__item .js-case-open-btn',function(){var $id=$(this).data('id')
$('#game_'+$id).addClass('is-open')})
$('body').on('click','.case-grid__item .js-case-close-btn',function(){var $id=$(this).data('id')
$('#game_'+$id).removeClass('is-open')})
$('body').on('mouseover','.case-grid__item .js-case-open-btn',function(){var $id=$(this).data('id')
$('.case-grid').find('li[data-id="'+$id+'"]').find('a').attr('href','#game')})
$('body').on('mouseover','.case-grid__item img',function(){var $id=$(this).data('id')
var url=$('.case-grid').find('li[data-id="'+$id+'"]').find('a').data('href')
$('.case-grid').find('li[data-id="'+$id+'"]').find('a').attr('href',url)})
function updateBalanceNumbers(data){Array.from(document.querySelectorAll('.saldo_punkty'),(el)=>animateCurrency(el,data.pkt))
Array.from(document.querySelectorAll('.saldo_dolce'),(el)=>animateNumber(el,data.vdolce))
Array.from(document.querySelectorAll('.saldo_gold'),(el)=>animateNumber(el,data.gold))}
function balance(){if(LOGIN==1){$.get(SITE_URL+'balance',function(data){if(data==0){return}else{var obj=JSON.parse(data)
updateBalanceNumbers(obj)}})}}
$('body').on('click','.task-list .tablica-el',function(){var $id=$(this).data('id')
$('#tasks-content').find('.task').hide()
$('#tasks-content').find('.task_'+$id).show()
$('.task-list a').removeClass('border-transparent').removeClass('border-gold').addClass('border-transparent')
$(this).removeClass('border-transparent').addClass('border-gold')
$('#load_challenges').html('')})
function goToByScroll(id){id=id.replace('link','')
$('html,body').animate({scrollTop:$('#'+id).offset().top-100,},'slow')}
$('body').on('click','#tasks-content .rozpocznij-btn',function(){var $id=$(this).data('id')
var $title=$(this).data('title')
var $img=$(this).data('img')
var $pkt=$(this).data('pkt')
var $gold=$(this).data('gold')
goToByScroll('load_challenges')
$.post(SITE_URL+'/panel/profil/challenges',{challenges_list:true,id:$id,}).done(function(data){$('#load_challenges').html(data)
$('body').find('.img-js').attr('src',$img)
$('body').find('.title-js').html($title)
$('body').find('.gold-js').html(formatNumber($gold))
if($pkt>0)$('body').find('.pkt-js').html(formatCurrency($pkt))
else $('body').find('.pkt-js').hide()})})
$('body').on('click','#tasks-content .tablica-el',function(){var $view=$(this).data('view')
$.post(SITE_URL+'/panel/profil/challenges',{view:$view}).done(function(data){$('#load_tab').html(data)})})
$('#search').keydown(function(){var $val=$(this).val()
var $ilosc=$val.length
if($ilosc>2){var $csrf=$('#csrfToken').val();$.post(SITE_URL+'/Api/search',{s:$val,csrf_token:$csrf}).done(function(obj){$('#csrfToken').val(obj.csrf);$('.search-results').html('')
$(obj.data).each(function(index,element){if(element.Type=='Game'){$('.search-results').append('<a href="'+
element.Url+
'"><li class="flex items-center p-5 hover:bg-navy-600">              <img src="'+
BASEURL+
element.Image+
'" alt="" class="w-24 h-12 rounded-lg object-contain light-skin"><p class="mx-3 font-thin text-base text-white uppercase">'+
element.Name+
'<br><span class="in_case">'+
lang_title[37]+
' </span> <span class="name_case">'+
element.Case_name+
'</span></p></li></a>')}
if(element.Type=='Case'){$('.search-results').append('<a href="'+
element.Url+
'"><li class="flex items-center p-5 hover:bg-navy-600"> <img src="'+
BASEURL+
element.Mini_image+
'" alt="" class="w-24 h-12 rounded-lg object-contain light-skin"><p class="mx-3 font-thin text-base text-white uppercase">'+
element.Name+
'</p></li></a>')}
if(element.Type=='Skins'){$('.search-results').append('<a href="'+
element.Url+
'"><li class="flex items-center p-5 hover:bg-navy-600">              <img src="'+
element.Image+
'" alt="" class="w-24 h-12 rounded-lg object-contain light-skin"><p class="mx-3 font-thin text-base text-white uppercase">'+
element.Name+
'<br><span class="in_case">'+
lang_title[37]+
' </span> <span class="name_case">'+
element.Case_name+
'</span></p></li></a>')}
if(element.Type=='SkinProduct'){$('.search-results').append('<a href="'+
element.Url+
'"><li class="flex items-center p-5 hover:bg-navy-600">              <img src="'+
element.Image+
'" alt="" class="w-24 h-12 rounded-lg object-contain light-skin"><p class="mx-3 font-thin text-base text-white uppercase">'+
element.Name+
'<br><span class="in_case">'+
lang_title[38]+
'</span>'+
'</p></li></a>')}})})}})
$('body').on('click','.help .ticket-menu',function(){var $view=$(this).data('view')
$('.help .ticket-menu').removeClass('border-gold').addClass('border-transparent')
$(this).addClass('border-gold').removeClass('border-transparent')
$('.help').find('.help-section').hide()
$('.help').find('.'+$view).show()})
function start_upload_blogarticle(){$('#form-upload-blogarticle').submit()}
function start_upload(){$('#form-upload-screenshot').submit()}
function start_upload2(){$('#form-upload-screenshot2').submit()}
$('body').on('submit','#form-upload-screenshot',function(e){e.preventDefault()
$.ajax({url:SITE_URL+'/AjaxUpload/help',type:'POST',data:new FormData(this),contentType:false,cache:false,processData:false,dataType:'json',beforeSend:function(){console.log('Trwa ładowanie')
$('.js-drag-area:visible .loading').show()},success:function(data){$('.js-drag-area:visible .loading').hide()
if(typeof data!='object'||!data.success){new Toast({type:'failure',title:lang_title[20],message:lang_title[8],duration:6000,})
$('.js-drag-img').removeAttr('src').addClass('hidden')}else if(data.success&&typeof data.data=='string'){$('#file_img').val(data.data)
$('#form-upload-screenshot')[0].reset()
$('#open_window').hide()
$('#file-name').html(data.data)}else{new Toast({type:'failure',title:lang_title[20],message:lang_title[8],duration:6000,})
$('.js-drag-img').removeAttr('src').addClass('hidden')}},error:function(e){alert('Błędne dane')},})})
$('body').on('submit','#form-upload-screenshot2',function(e){e.preventDefault()
$.ajax({url:SITE_URL+'/AjaxUpload/help',type:'POST',data:new FormData(this),contentType:false,cache:false,processData:false,dataType:'json',beforeSend:function(){console.log('Trwa ładowanie')
$('.js-drag-area:visible .loading').show()},success:function(data){$('.js-drag-area:visible .loading').hide()
if(typeof data!='object'||!data.success){new Toast({type:'failure',title:lang_title[20],message:lang_title[8],duration:6000,})
$('.js-drag-img').removeAttr('src').addClass('hidden')}else if(data.success&&typeof data.data=='string'){$('#zrzut').hide()
new Toast({type:'success',title:lang_title[21],message:lang_title[18],duration:6000,})
$('#chat').find('#file_img2').val(data.data)
$('#form-upload-screenshot2')[0].reset()}else{new Toast({type:'failure',title:lang_title[20],message:lang_title[8],duration:6000,})
$('.js-drag-img').removeAttr('src').addClass('hidden')}},error:function(e){alert('Błędne dane')},})})
$('body').on('submit','#form-upload-blogarticle',function(e){e.preventDefault()
$.ajax({url:SITE_URL+'/AjaxUpload/blog_article',type:'POST',data:new FormData(this),contentType:false,cache:false,processData:false,dataType:'json',beforeSend:function(){console.log('Trwa ładowanie')
$('.js-drag-area:visible .loading').show()},success:function(data){$('.js-drag-area:visible .loading').hide()
if(typeof data!='object'||!data.success){new Toast({type:'failure',title:lang_title[20],message:lang_title[8],duration:6000,})
$('.js-drag-img').removeAttr('src').addClass('hidden')}else if(data.success&&typeof data.data=='string'){$('#zrzut').hide()
new Toast({type:'success',title:lang_title[21],message:lang_title[18],duration:6000,})
$('#image_blogarticle').val(data.data)
$('#form-upload-blogarticle')[0].reset()}else{new Toast({type:'failure',title:lang_title[20],message:lang_title[8],duration:6000,})
$('.js-drag-img').removeAttr('src').addClass('hidden')}},error:function(e){alert('Błędne dane')},})})
$('body').on('submit','#form-account-email-verifier',function(e){e.preventDefault()
$.post(SITE_URL+'/panel/profil/verifi_email_code',$(this).serialize(),function(msg){if(!msg||msg.status!=1){new Toast({type:'failure',title:lang_title[20],message:msg.info||'error',duration:6000,})
return false}else if(msg.status==1){new Toast({type:'success',title:lang_title[21],message:msg.info,duration:6000,})
setTimeout(function(){window.location.href='/panel/profil?p=settings'},2000)}},'json')
return false})
$('body').on('click','#email_notifications_cancel',function(e){e.preventDefault()
$.post(SITE_URL+'/panel/profil/email_notifications_cancel',[],function(msg){if(!msg||msg.status!=1){new Toast({type:'failure',title:lang_title[20],message:msg.info||'error',duration:6000,})
return false}else if(msg.status==1){$('a.anchor-cancel-subscribe').remove()
$('input[name="email_address"]').val('')
new Toast({type:'success',title:lang_title[21],message:msg.info,duration:6000,})}},'json')
return false})
$('body').on('submit','#email_address-submit',function(e){e.preventDefault()
$.post(SITE_URL+'/panel/profil/sendemail_verifi',$(this).serialize(),function(msg){if(!msg||msg.status!=1){new Toast({type:'failure',title:lang_title[20],message:msg.info,duration:6000,})
return false}else if(msg.status==1){new Toast({type:'success',title:lang_title[21],message:msg.info,duration:6000,})
open_modal('account-email-verifier')}},'json')
return false})
$('body').on('click','#open_window',function(){$('#file_upload').click()})
$('body').on('click','#open_window2',function(){$('#file_upload2').click()})
$('body').on('submit','#help-form',function(e){$.post(SITE_URL+'/Help/send',$(this).serialize(),function(data){var obj=jQuery.parseJSON(data)
if(obj.Status==1){new Toast({type:'success',title:lang_title[21],message:obj.Info,duration:6000,})
$('#help-form')[0].reset()
setTimeout(function(){location.reload()},2000)}else{new Toast({type:'failure',title:lang_title[20],message:obj.Info,duration:6000,})}})
e.preventDefault()})
$('body').on('click','.ticket-list li',function(){var $id=$(this).data('id')
$('.ticket_list').hide()
$('.chat-section').show()
$('.chat-section').load(SITE_URL+'/Help/load_chat/'+$id,function(){console.log('Zaladowane')})})
function load_ticket($id){$('.new_ticket').hide()
$('.ticket_list').hide()
$('.chat-section').show()
$('.chat-section').load(SITE_URL+'/Help/load_chat/'+$id,function(){console.log('Zaladowane')})}
$('body').on('submit','#chat',function(e){$.post(SITE_URL+'/Help/send_chat',$(this).serialize(),function(data){var obj=jQuery.parseJSON(data)
if(obj.Status==1){new Toast({type:'success',title:lang_title[21],message:obj.Info,duration:6000,})
$('#chat')[0].reset()
setTimeout(function(){location.reload()},3000)}else{new Toast({type:'failure',title:lang_title[20],message:obj.Info,duration:6000,})}})
e.preventDefault()})
$('body').on('click','.activate-modal',function(){var $type=$(this).data('type')
var $img=$(this).data('img')
var $tutorial=$(this).data('tutorial')
$('body').find('#activation-guide-modal').find('#load_tutorial').load(SITE_URL+'panel/profil/tutorial/'+$tutorial)
$('#activation-guide-modal').find('.img-src').attr('src',$img)
MicroModal.show('activation-guide-modal')})
function open_modal($id_modal){MicroModal.show($id_modal)}
$('.giveaway-m').click(function(){var gab_title=$(this).find('.gab__title').html()
var type=$(this).data('type')
var img=$(this).data('img')
var title=$(this).data('title')
var sposob=$(this).data('sposob')
var hash=$(this).data('hash')
var id=$(this).data('id')
var dolaczenie=$(this).data('dolaczenie')
$('#giveaway-modal').find('.gab__title').html(gab_title)
if(dolaczenie==0){$('#giveaway-modal').find('.step-2').html('<a href="#dolacz" class="btn btn--solid py-2 font-body text-2xs" onclick="dolacz_g('+
id+
')">'+
lang_title[9]+
'</a>')}else{$('#giveaway-modal').find('.step-2').html(lang_title[10])}
$('#giveaway-modal').find('.gab__img').attr('src',img)
$('#giveaway-modal').find('.gab__name').html(title)
$('#giveaway-modal').find('.step-1').html(sposob)
$('#giveaway-modal').find('.hash').html(hash)
$('#giveaway-modal').find('.gam__header-price').html('#'+id)
$('#giveaway-modal').find('header').removeClass('gab--01').removeClass('gab--02').removeClass('gab--03').removeClass('gab--04')
$('#giveaway-modal').find('.gab__progress').hide()
$('#giveaway-modal').find('.gab__text strong').hide()
if(type=='1'){$('#giveaway-modal').find('.js-hourly-giveaway-counter').show()
$('#giveaway-modal').find('.js-hourly-giveaway-progress').show()
$('#giveaway-modal').find('header').addClass('gab--01')}
if(type=='2'){$('#giveaway-modal').find('.js-daily-giveaway-counter').show()
$('#giveaway-modal').find('.js-daily-giveaway-progress').show()
$('#giveaway-modal').find('header').addClass('gab--02')}
if(type=='3'){$('#giveaway-modal').find('.js-weekly-giveaway-counter').show()
$('#giveaway-modal').find('.js-weekly-giveaway-progress').show()
$('#giveaway-modal').find('header').addClass('gab--03')}
if(type=='4'){$('#giveaway-modal').find('.js-monthly-giveaway-counter').show()
$('#giveaway-modal').find('.js-monthly-giveaway-progress').show()
$('#giveaway-modal').find('header').addClass('gab--04')}
var grupa=type
$.get(SITE_URL+'Giveaway/last_winner/'+grupa,function(data){$('#giveaway-modal').find('.gaw__table').find('tbody').html('')
var obj=jQuery.parseJSON(data)
$(obj).each(function(index,element){$('#giveaway-modal').find('.gaw__table').find('tbody').append('<tr><td><div class="text-white">'+
lang_title[25]+
'</div><div class="text-red">'+
element.Wartosc+
'</div></td><td><img src="'+
element.Img+
'" alt="" class="gaw__award-img"></td><td><div class="text-white">'+
element.Name+
'</div><div class="gaw__date">'+
element.Data_zakonczenia+
'</div></td><td><a href="'+
SITE_URL+
'user/profile/'+
element.SteamID+
'" target="_blank"><div class="gaw__flex gaw__user"><img src="'+
element.Avatar+
'" alt="" class="gaw__avatar mr-2">'+
escapeHtml(element.Username)+
'</div></a></td></tr>')})})
MicroModal.show('giveaway-modal')})
function dolacz_g(id){$.post(SITE_URL+'/Giveaway/add',{giveaway:id},function(data){var obj=jQuery.parseJSON(data)
if(obj.Status==1){new Toast({type:'success',title:lang_title[21],message:obj.Info,duration:6000,})}else{new Toast({type:'failure',title:lang_title[20],message:obj.Info,duration:6000,})}})}
$('#payout-modal').find('.fortnite_kafelek').click(function(){var ilosc=$(this).data('ilosc')
var id=$(this).data('id')
$('#payout-modal').find('#pakiet').html(ilosc)
$('#payout-modal').find('#id_pakiet').val(id)})
function wymien_vdol(){var val=$('#id_pakiet').val()
if(val==0){new Toast({type:'failure',title:lang_title[20],message:lang_title[11],duration:6000,})}else{$.post(SITE_URL+'/panel/Profil/wymien_psc',{wymiana_v_dol:1,id_pakiet:val},function(data){var obj=JSON.parse(data)
if(obj.datas.status==0){new Toast({type:'failure',title:lang_title[20],message:obj.datas.info,duration:6000,})}else{new Toast({type:'success',title:lang_title[21],message:obj.datas.info,duration:6000,})
if(obj.datas.code){$('#payout-modal').find('.your-code').find('.your-code-text').html(obj.datas.code)
$('#payout-modal').find('.your-code').show()}
balance()}})}}
$('body').on('click','.my-winner .select',function(){$(this).find('.select-styled').toggleClass('active')})
$('body').on('click','.my-winner .select li',function(){var value=$(this).data('value')
$('.my-winner .select .select-styled').html(value)
$('.my-winner .game-item').each(function(index){var odebrane=$(this).data('odebrane')
if(value=='Received'){if(odebrane==1)$(this).show()
else $(this).hide()}
if(value=='Not received'){if(odebrane==0)$(this).show()
else $(this).hide()}
if(value=='All'){$(this).show()}})})
function contracts_selected(){$ilosc=$('body').find('.contracts-game .selected').length
$('.contracts-points').find('.ilosc').html($ilosc+'/5')
if($ilosc==5){$('.contracts-game li').addClass('op2')}
if($ilosc<5){var bg_global=$('#bg_global').val()
var list=$('.contracts-game').find('li[data-bg='+bg_global+']')
$(list).each(function(index){if(!$(this).hasClass('selected')){$(this).show()
$(this).removeClass('op2')}})}
if($ilosc==0){$('.contracts-game').find('li').removeClass('op2').removeClass('selected').show()}
$('body').find('.items-start li').each(function(index){$(this).find('img').attr('src','#')
$(this).find('.cname').html('---')
$(this).attr('data-ids',0)})
$('body').find('.contracts-game .selected').each(function(index){var bg=$(this).data('bg')
var image=$(this).data('image')
var bg_class=$(this).data('bg_class')
var name=$(this).data('name')
var id=$(this).data('id')
$('.items-start').find('li[data-id='+(index+1)+']').find('img').attr('src',BASEURL+'/'+image)
$('.items-start').find('li[data-id='+(index+1)+']').find('.cname').html(name)
$('.items-start').find('li[data-id='+(index+1)+']').data('bg',bg)
$('.items-start').find('li[data-id='+(index+1)+']').data('ids',id)})}
$('body').on('click','.contracts-game li',function(){if($(this).hasClass('op2'))return false
$('.contracts-game li').hide()
var bg=$(this).data('bg')
var hex=$(this).data('hex')
$('#bg_global').val(bg)
$('.items-start').find('.cname').css('background-color',hex)
var list=$('.contracts-game').find('li[data-bg='+bg+']')
$(this).addClass('selected')
$(list).each(function(index){if(!$(this).hasClass('selected'))$(this).show()})
var sod=0
var sdo=0
if(bg==1){sod=10
sdo=29}
if(bg==2){sod=30
sdo=59}
if(bg==3){sod=60
sdo=89}
if(bg==4){sod=90
sdo=129}
if(bg==5){sod=130
sdo=260}
if(currency=='USD'){$('.contracts-points').find('.od').html(formatCurrency(Math.round(sod/4)))
$('.contracts-points').find('.do').html(formatCurrency(Math.round(sdo/4)))}else{$('.contracts-points').find('.od').html(sod+' PLN')
$('.contracts-points').find('.do').html(sdo+' PLN')}
contracts_selected()})
$('body').on('click','.contracts-items li',function(){var bg=$(this).data('bg')
var ids=$(this).data('ids')
$('body').find('.contracts-game').find('li[data-id='+ids+']').removeClass('selected')
contracts_selected()})
function kontrakt(){$ilosc=$('body').find('.contracts-game .selected').length
if($ilosc!=5){new Toast({type:'failure',title:lang_title[20],message:lang_title[12],duration:6000,})
return false}
var id=[]
$('.contracts-items li').each(function(index){id.push($(this).data('ids'))})
$.post(SITE_URL+'Contract',{gry:id},function(data){if(data=='null'){new Toast({type:'failure',title:lang_title[20],message:lang_title[13],duration:6000,})
return false}else{var obj=jQuery.parseJSON(data)
$('body').find('#victory-modal-contracts').find('.item-title').html(obj.name)
$('body').find('#victory-modal-contracts').find('.img-src').attr('src',obj.mini_image)
open_modal('victory-modal-contracts')
$('body').find('.contracts-game .selected').remove()
contracts_selected()}})}
$('body').on('keyup','#ilosc_v_dol',function(){var $val=$(this).val()
$.get(SITE_URL+'Api/exchange_dolce/'+$val,function(data){$('#ilosc_monet').val(data)})})
function wymien_na_pln(){$.post(SITE_URL+'panel/Profil/wymiana_na_pln',{wymiana_na_pln:1,ilosc_v_dol:$('#ilosc_v_dol').val()},function(data){var obj=JSON.parse(data)
if(obj.datas.status==0){new Toast({type:'failure',title:lang_title[20],message:obj.datas.info,duration:6000,})
return false}else{balance()
new Toast({type:'success',title:lang_title[21],message:obj.datas.info,duration:6000,})}})}
$('body').on('click','.js-pay-package',function(){var $pkt=$(this).data('kwota')
var $gold=$(this).data('gold')
var $coin=$(this).data('coin')
$('.js-pay-input').val($pkt)
$('.js-pay-pkt').text(formatCurrency($pkt*parseFloat($('.js-pay-pkt').data('multiplier')||1)))
$('.js-pay-gold').text(formatNumber($gold))
$('.js-pay-coin').text(formatNumber(Math.floor($coin)))})
$('body').on('click','#widok-payment .pakiet-sms',function(){var $numer_sms=$(this).data('numer_sms')
var $netto=$(this).data('netto')
var $punkty=$(this).data('punkty')
var $gold=$(this).data('gold')
var $coin=$(this).data('coin')
var $tresc=$(this).data('tresc')
$('.SMS-info').find('#sms-brutto').html(formatNumber($netto*1.23,2))
$('.SMS-info').find('#sms-pkt').html(formatNumber($punkty,2))
$('.SMS-info').find('#sms-numer').html($numer_sms)
$('.SMS-info').find('#sms-tresc').html($tresc)
$('.js-pay-pkt').html(formatCurrency($punkty))
$('.js-pay-gold').html(formatNumber($gold))
$('.js-pay-coin').html(formatNumber(Math.floor($coin)))})
$('body').on('keyup','.js-pay-input',function(e){const value=e.target.value
$('.js-pay-pkt').text(formatCurrency(value*parseFloat($('.js-pay-pkt').data('multiplier')||1)))
$('.js-pay-gold').text(formatNumber(value*parseFloat($('.js-pay-gold').data('multiplier')||1)))
$('.js-pay-coin').text(formatNumber(Math.floor(value*parseFloat($('.js-pay-coin').data('multiplier')||1))))
Array.from(document.querySelectorAll('.js-pay-package')).forEach((package)=>{const radio=package.querySelector('.js-pay-radio')
radio.checked=radio.value===value})})
const payButton={loading(){$('.doladuj-btn').html('<svg width="10px" height="10px" viewBox="0 0 24 24"><rect x="0" y="10" width="4" height="10" fill="#dcae64" opacity="0.2"> <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite" /> <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite" /> <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite" /> </rect> <rect x="8" y="10" width="4" height="10" fill="#dcae64"  opacity="0.2"> <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite" /> <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" /> <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" /> </rect> <rect x="16" y="10" width="4" height="10" fill="#dcae64"  opacity="0.2"> <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite" /> <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" /> <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" /> </rect> </svg>')},}
$('body').on('submit','#cashbill_open',function(e){e.preventDefault()
payButton.loading()
var val=parseFloat($('#final-amount').val())
if(val<3){new Toast({type:'failure',title:lang_title[20],message:lang_title[14]+' 3zł',duration:6000,})
$('.doladuj-btn').html(lang_title[15])
return false}else{$.post(SITE_URL+'Payment/cashbill_open',{Kwota:val},function(data){if(data==0){$('.doladuj-btn').html(lang_title[15])
new Toast({type:'failure',title:lang_title[20],message:lang_title[16],duration:6000,})
return false}else{location.href=data}})}})
$('body').on('submit','#doladuj_psc_form',function(e){e.preventDefault()
payButton.loading()
var kwota=parseFloat($('#final-amount-psc').val())
if(kwota!=''){if(currency=='PLN')var $min=3
if(currency=='USD')var $min=1
if(kwota<$min){$('.doladuj-btn').html(lang_title[15])
new Toast({type:'failure',title:lang_title[20],message:lang_title[14]+' '+$min+' '+currency,duration:6000,})
return false}else{$.post(SITE_URL+'Payment/psc_open',$(this).serialize(),function(data){var obj=JSON.parse(data)
if(obj.Status==false){new Toast({type:'failure',title:lang_title[20],message:obj.Info,duration:6000,})
return false}else{new Toast({type:'success',title:lang_title[21],message:obj.Info,duration:6000,})
location.href=obj.Url}})}}})
$('body').on('submit','#doladuj_psc_form_new',function(e){e.preventDefault()
payButton.loading()
var kwota=parseFloat($('#final-amount-psc').val())
if(kwota!=''){if(currency=='PLN')var $min=3
if(currency=='USD')var $min=1
if(kwota<$min){$('.doladuj-btn').html(lang_title[15])
new Toast({type:'failure',title:lang_title[20],message:lang_title[14]+' '+$min+' '+currency,duration:6000,})
return false}else{$.post(SITE_URL+'PscPay/psc_open',$(this).serialize(),function(data){var obj=JSON.parse(data)
if(obj.Status==false){new Toast({type:'failure',title:lang_title[20],message:obj.Info,duration:6000,})
return false}else{new Toast({type:'success',title:lang_title[21],message:obj.Info,duration:6000,})
location.href=obj.Url}})}}})
$('body').on('submit','#paypal_n',function(e){e.preventDefault()
payButton.loading()
var val=0
var val=parseFloat($('#final-amount').val())
if(currency=='PLN')var $min=5
if(currency=='USD')var $min=2
if(val<$min){new Toast({type:'failure',title:lang_title[20],message:lang_title[14]+' '+$min+' '+currency,})
$('.doladuj-btn').html('DOŁADUJ PORTFEL')
return false}else{$.post(SITE_URL+'Payment/create_paypal',{Kwota:val},function(data){if(data==0){$('.doladuj-btn').html(lang_title[15])
new Toast({type:'failure',title:lang_title[20],message:lang_title[16],duration:6000,})
return false}else{location.href=data}})}})
$('body').on('submit','#coinbase',function(e){e.preventDefault()
payButton.loading()
var kwota=parseFloat($('#final-amount').val())
if(kwota!=''){if(currency=='PLN')var $min=0.01
if(currency=='USD')var $min=1
if(kwota<$min){$('.doladuj-btn').html(lang_title[15])
new Toast({type:'failure',title:lang_title[20],message:lang_title[14]+' '+$min+' '+currency,duration:6000,})
return false}else{$.post(SITE_URL+'pay/Coinbase/create',$(this).serialize(),function(data){var obj=JSON.parse(data)
if(obj.Status==false){new Toast({type:'failure',title:lang_title[20],message:obj.Info,duration:6000,})
return false}else{new Toast({type:'success',title:lang_title[21],message:obj.Info,duration:6000,})
location.href=obj.Url}})}}})
$('body').on('submit','#payop_open',function(e){e.preventDefault()
payButton.loading()
var $rates=$(this).data('rates')
if($rates==1){var val=parseFloat($('#final-amount').val())
$min=1}else{var val=roundNumber($('#final-amount').val()/$rates,2)
$min=0.1}
if(val<$min){new Toast({type:'failure',title:lang_title[20],message:lang_title[14]+' '+$min+' '+currency,duration:6000,})
$('.doladuj-btn').html(lang_title[15])
return false}else{$.post(SITE_URL+'Payment/payop_open',{Kwota:val},function(data){var obj=jQuery.parseJSON(data)
if(!obj.Status){new Toast({type:'failure',title:lang_title[20],message:obj.Info,duration:6000,})}else{new Toast({type:'success',title:lang_title[21],message:obj.Info,duration:6000,})
setTimeout(function(){location.href=obj.Url},2000)}})}})
$('body').on('submit','#payop_open_brasil',function(e){e.preventDefault()
payButton.loading()
var $rates=$(this).data('rates')
if($rates==1){var val=parseFloat($('#final-amount').val())
$min=1}else{var val=roundNumber($('#final-amount').val()/$rates,2)
$min=0.1}
if(val<$min){new Toast({type:'failure',title:lang_title[20],message:lang_title[14]+' '+$min+' '+currency,duration:6000,})
$('.doladuj-btn').html(lang_title[15])
return false}else{$.post(SITE_URL+'Payment/payop_open',$('#payop_open_brasil').serialize(),function(data){var obj=jQuery.parseJSON(data)
if(!obj.Status){new Toast({type:'failure',title:lang_title[20],message:obj.Info,duration:6000,})}else{new Toast({type:'success',title:lang_title[21],message:obj.Info,duration:6000,})
setTimeout(function(){location.href=obj.Url},2000)}})}})
$('body').on('submit','#sms-check',function(e){e.preventDefault()
var code=$('#otrzymanyKod').val()
var numer=$('.SMS-info').find('#sms-numer').text()
var kwota=$('.SMS-info').find('#sms-pkt').text()
$.post(SITE_URL+'panel/Payment/sms',{codesms:code,numer:numer,kwota:kwota},function(data){if(data&&data.status==1){new Toast({type:'success',title:lang_title[21],message:data.info,duration:6000,})
balance()}else{if(data&&data.status==0){new Toast({type:'failure',title:lang_title[20],message:data.info,duration:6000,})
return false}else{new Toast({type:'failure',title:lang_title[20],message:lang_title[17],duration:6000,})}}},'json')})
function check_cashback(){var $Code=$('#cashback').val()
$.post(SITE_URL+'payment/check_cashback',{Code:$Code}).done(function(data){if(data==0){new Toast({type:'failure',title:lang_title[20],message:lang_title[17],duration:6000,})
return false}else{var obj=jQuery.parseJSON(data)
new Toast({type:'success',title:lang_title[21],message:'Kod jest poprawny! Otrzymujesz '+
obj.Procent_cashback+
'% bonusu przy kolejnym doładowaniu',duration:6000,})}})}
$('body').on('click','#open_window_z',function(){$('#file_upload_z').click()})
function start_upload_zadanie(){$('#form-upload-zadanie').submit()}
$('body').on('submit','#form-upload-zadanie',function(e){e.preventDefault()
$.ajax({url:SITE_URL+'/AjaxUpload/zadania',type:'POST',data:new FormData(this),contentType:false,cache:false,processData:false,dataType:'json',beforeSend:function(){console.log('Trwa ładowanie')
$('.js-drag-area:visible .loading').show()},success:function(data){$('.js-drag-area:visible .loading').hide()
if(typeof data!='object'||!data.success){new Toast({type:'failure',title:lang_title[20],message:lang_title[8],duration:6000,})
$('.js-drag-img').removeAttr('src').addClass('hidden')}else if(data.success&&typeof data.data=='string'){$('#form-upload-zadanie')[0].reset()
$('#zrzut').hide()
new Toast({type:'success',title:lang_title[21],message:lang_title[18],duration:6000,})
$('#form_zadania').find('#img_upload').val(data.data)}else{new Toast({type:'failure',title:lang_title[20],message:lang_title[8],duration:6000,})
$('.js-drag-img').removeAttr('src').addClass('hidden')}},error:function(e){alert('Błędne dane')},})})
$('body').on('submit','#form_zadania',function(event){var $function=$(this).find('#function').val()
$.post(SITE_URL+'/Challenges/send_'+$function,$(this).serialize()).done(function(data){var obj=jQuery.parseJSON(data)
if(obj.status==1){new Toast({type:'success',title:lang_title[21],message:obj.info,duration:6000,})
setTimeout(function(){location.href=SITE_URL+'panel/profil?p=challenges'},3000)}else{new Toast({type:'failure',title:lang_title[20],message:obj.info,duration:6000,})}}).fail(function(){new Toast({type:'failure',title:lang_title[20],message:lang_title[16],duration:6000,})})
event.preventDefault()})
$('body').on('submit','#form_zadania_accept',function(event){var $function=$(this).find('#function').val()
var $csrf=$('#csrfToken').val();var $val=$("#form_zadania_accept").find("#id_zadania").val();$.post(SITE_URL+'Challenges/send_auto_accept',{ID:$val,csrf_token:$csrf,function:'auto_accept'}).done(function(data){var obj=jQuery.parseJSON(data)
$('#csrfToken').val(obj.csrf);if(obj.status==1){new Toast({type:'success',title:lang_title[21],message:obj.info,duration:6000,})
setTimeout(function(){location.href=SITE_URL+'panel/profil?p=challenges'},3000)}else{new Toast({type:'failure',title:lang_title[20],message:obj.info,duration:6000,})}}).fail(function(){new Toast({type:'failure',title:lang_title[20],message:lang_title[16],duration:6000,})})
event.preventDefault()})
$('body').on('submit','#form-zadania-email-verifier',function(e){e.preventDefault()
$.post(SITE_URL+'/challenges/verifi_email_code',$(this).serialize(),function(msg){if(!msg||msg.status!=1){new Toast({type:'failure',title:lang_title[20],message:msg.info,duration:6000,})
return false}else if(msg.status==1){new Toast({type:'success',title:lang_title[21],message:msg.info,duration:6000,})
setTimeout(function(){window.location.reload()},2000)}},'json')
return false})
$('body').on('submit','#form_zadania_email',function(event){var $function=$(this).find('#function').val()
$.post(SITE_URL+'/Challenges/send_'+$function,$(this).serialize()).done(function(data){var obj=jQuery.parseJSON(data)
if(obj.status==1){new Toast({type:'success',title:lang_title[21],message:obj.info,duration:6000,})
$('#modal-podaj-email').hide()
$('#modal-podaj-email-kod').show()}else{new Toast({type:'failure',title:lang_title[20],message:obj.info,duration:6000,})}}).fail(function(){new Toast({type:'failure',title:lang_title[20],message:lang_title[16],duration:6000,})})
event.preventDefault()})
$('body').on('submit','#promo_code',function(event){var code=$('#promoCode').val()
$.post(SITE_URL+'panel/profile/promo_code',{kod_promocyjny:code},function(data){var obj=jQuery.parseJSON(data)
if(obj.status==1){new Toast({type:'success',title:lang_title[21],message:obj.info,duration:6000,})
balance()}else{new Toast({type:'failure',title:lang_title[20],message:obj.info,duration:6000,})}})
event.preventDefault()})
$('body').on('submit','#gold_code',function(event){var code=$('#promoCode').val()
$.post(SITE_URL+'panel/Payment/gold_code',{kod_promocyjny:code},function(data){var obj=jQuery.parseJSON(data)
if(obj.status==1){new Toast({type:'success',title:lang_title[21],message:obj.info,duration:6000,})
balance()}else{new Toast({type:'failure',title:lang_title[20],message:obj.info,duration:6000,})}})
event.preventDefault()})
function no_money(){new Toast({type:'failure',title:lang_title[20],message:lang_title[19],duration:6000,})}
$('body').on('click','.js-profile-nav-btn',function(){$('.nav_profile').toggleClass('is-open')})
$('body').on('click','.js-profile-nav-list a',function(){$('.nav_profile').removeClass('is-open')})
$('body').on('click','.sp-po',function(){$('.js-loser-btn-container').addClass('opacity-0')})
function new_message(){$.get(SITE_URL+'Help/new_message',function(data){if(data==1){$('#new_message').show()}})}
var list=document.querySelector('.js-livedrop-list')
let windowIsActive2=true
window.addEventListener('focus',()=>{windowIsActive2=true})
window.addEventListener('blur',()=>{windowIsActive2=false})
$('body').on('click','#pp-withdraw .withdraw-option',function(){var $text=$(this).data('ilosc')
var $id=$(this).data('id')
$('#pp-withdraw').find('#pakiet').html($text)
$('#pp-withdraw').find('#id_pakiet').val($id)})
$('body').on('submit','#pp-withdraw-form',function(e){e.preventDefault()
var $form=$(this).serialize()
$.post(SITE_URL+'/panel/profil/affilate',$form,function(data){var obj=jQuery.parseJSON(data)
if(obj.Status==1){new Toast({type:'success',title:lang_title[21],message:obj.Info,duration:6000,})}else{new Toast({type:'failure',title:lang_title[20],message:obj.Info,duration:6000,})}})})
function noti(){$('#noti').find('ul').html('')
$.getJSON(SITE_URL+'Api/noti',function(result){$.each(result,function(i,v){if(v.Status==0){$('#noti').find('ul').append('<li class="flex p-3 border border-solid border-navy-600 bg-navy-600 rounded-lg noti-box" data-id="'+
v.ID+
'" data-href="'+
v.Url+
'"><div class="mt-1 flex-shrink-0 w-2 h-2 border border-solid border-gold bg-gold rounded-full"></div><div class="ml-3"><div class="font-semibold text-sm leading-tight">'+
v.Contents+
'</div> <div class="mt-1 font-thin text-2xs leading-none text-navy-300 text-right">'+
v.Date+
'</div></div> </li>')}else{$('#noti').find('ul').append('<li class="mt-2 flex p-3 border border-solid border-navy-500 rounded-lg noti-box" data-id="'+
v.ID+
'" data-href="'+
v.Url+
'"><div class="mt-1 flex-shrink-0 w-2 h-2 border border-solid border-navy-300 rounded-full"></div><div class="ml-3"><div class="font-semibold text-sm leading-tight">'+
v.Contents+
'</div> <div class="mt-1 font-thin text-2xs leading-none text-navy-300 text-right">'+
v.Date+
'</div></div> </li>')}})})}
$('body').on('click','#noti .noti-box',function(){var $href=$(this).data('href')
var $id=$(this).data('id')
$(this).attr('class','mt-2 flex p-3 border border-solid border-navy-500 rounded-lg noti-box')
$(this).find('.rounded-full').attr('class','mt-1 flex-shrink-0 w-2 h-2 border border-solid border-navy-300 rounded-full')
$.post(SITE_URL+'Api/noti',{ID:$id},function(){if($href!='#')window.open($href)})})
$('body').on('keyup','#kwota_wyplaty',function(){var $val=$(this).val()
$('#pp-withdraw-portfel').find('#kwota').val($val)})
$('body').on('click',"input[name='currency']",function(){$.post(SITE_URL+'/Api/change_waluta',$(this).serialize(),function(){location.reload()})})
$('body').on('change','#lang',function(){var $lang=$(this).val()
$.post(SITE_URL+'/Api/change_lang',{lang:$lang},function(){window.location.href='/'+String($lang).toLowerCase()+'/panel/profil?p=settings#settings'})})
$('body').on('click','.modal .btn-sell-dolce',function(){var $ilosc=$(this).data('ilosc')
$(this).css('opacity','0.2')
$.post(SITE_URL+'panel/Profil/wymiana_na_pln',{wymiana_na_pln:1,ilosc_v_dol:$ilosc},function(data){var obj=JSON.parse(data)
if(obj.datas.status==0){new Toast({type:'failure',title:lang_title[20],message:obj.datas.info,duration:6000,})
return false}else{balance()
new Toast({type:'success',title:lang_title[21],message:obj.datas.info,duration:6000,})}})})
function load_btn(){forEach(document.querySelectorAll('.game-item'),function(e){e.querySelector('.game-item-menu-btn').addEventListener('click',function(){e.classList.toggle('is-nav-open')}),e.addEventListener('mouseleave',function(){e.classList.remove('is-nav-open')})})
forEach(document.querySelectorAll('.js-copy-btn'),function(e){var t=e.textContent
e.addEventListener('click',function(){copyToClipboard(e.dataset.copyText),(e.textContent=e.dataset.successText)}),e.addEventListener('mouseleave',function(){setTimeout(function(){return(e.textContent=t)},180)})})}
function wymien_dolce($kwota){goToByScroll('wymien_dolce')
$('#wymien_dolce #ilosc_v_dol').val($kwota)}
$('body').on('submit','#trade-url-submit',function(event){$.post(SITE_URL+'panel/Profil/change_trade_url',$(this).serialize(),function(data){var obj=jQuery.parseJSON(data)
if(obj.status==1){new Toast({type:'success',title:lang_title[21],message:obj.info,duration:6000,})}else{new Toast({type:'failure',title:lang_title[20],message:obj.info,duration:6000,})}})
event.preventDefault()})
function withdraw_skin($id){$.get(SITE_URL+'skins/Control/withdraw/'+$id,function(data){var obj=jQuery.parseJSON(data)
if(obj.Status==1){new Toast({type:'success',title:lang_title[21],message:obj.Info,duration:6000,})
$('#skin_item_'+$id).find('.status-widthdraw').html('<div class="game-item-overlay flex flex-col justify-center items-center w-full h-full absolute z-10 top-0 left-0"><div class="dot-loader absolute top-0 left-0 m-2 sm:m-4 text-gold group-hover:opacity-0 transition"><span></span><span></span><span></span></div><svg class="w-6 h-6 relative text-gold"><use xlink:href="'+
BASEURL+
'web/KD/static/icons.svg#hourglass"></svg>  <p class="mt-3 font-bold text-xs uppercase leading-none text-gold">'+
lang_title[26]+
'</p><p class="w-4/5 mt-2 font-bold text-2xs uppercase leading-none text-navy-200 text-center">'+
lang_title[34]+
'</p></div>')}else{new Toast({type:'failure',title:lang_title[20],message:obj.Info,duration:6000,})}})}
$('body').on('click','.modal .sell-skins-btn',function(){$(this).css('opacity','0.2')
var $id_sell=$(this).data('id_sell')
sell_skin($id_sell)})
function sell_skin($id,$info=1){$('body').find('#win-modal .sell-skin').css('opacity','0.2')
$.get(SITE_URL+'skins/Control/sell/'+$id,function(data){var obj=jQuery.parseJSON(data)
if(obj.Status==1){if($info==1){new Toast({type:'success',title:lang_title[21],message:obj.Info,duration:6000,})
$('#skin_item_'+$id).find('.skins-status').attr('class','flex items-center absolute top-0 left-0 m-2 sm:m-4 px-1 py-3 font-bold text-2xs uppercase leading-none text-red skins-status').html('<div class="w-2 h-2 mr-1 bg-current rounded-full"></div>'+
lang_title[35]+
'')
balance()}}else{if($info==1){new Toast({type:'failure',title:lang_title[20],message:obj.Info,duration:6000,})}}})}
$('body').on('click','.modal .sell_skin_all',function(){$(this).css('opacity','0.2')
$.post(SITE_URL+'skins/Control/sell_all',{winners:loserService.state.context.winners},function(data){var obj=jQuery.parseJSON(data)
if(obj.Status==1){$(this).css('opacity','0.2')
$('.modal .sell-skins-btn').each(function(index){$(this).css('opacity','0.2')})
new Toast({type:'success',title:lang_title[21],message:obj.Info,duration:6000,})
setTimeout(function(){balance()},2000)}else{new Toast({type:'failure',title:lang_title[20],message:obj.Info,duration:6000,})}})})
$('body').on('click','.modal .sell_dolce_all',function(){$(this).css('opacity','0.2')
var $this=$(this)
var $ilosc=$(this).data('ilosc')
if($ilosc<10){new Toast({type:'failure',title:lang_title[20],message:lang_title[23],duration:6000,})
$(this).css('opacity','1')}else{$.post(SITE_URL+'panel/Profil/wymiana_na_pln',{wymiana_na_pln:1,ilosc_v_dol:$ilosc},function(data){var obj=JSON.parse(data)
if(obj.datas.status==0){new Toast({type:'failure',title:lang_title[20],message:obj.datas.info,duration:6000,})
return false}else{balance()
new Toast({type:'success',title:lang_title[21],message:obj.datas.info,duration:6000,})}})}})
function market_info(){$.get(SITE_URL+'/skins/Control/market_info',function(data){if(data==0)return false
var obj=jQuery.parseJSON(data)
$.each(obj,function(i,field){if(field.Trade_status=='1'){if($('#wrong-url-modal').data('open')==0){MicroModal.show('wrong-url-modal')
$('#wrong-url-modal').data('open',1)}}
var $status=$('#skin_item_'+field.ID_loser).data('status')
if($status!=4){if(field.Stage==0){$('#skin_item_'+field.ID_loser).find('.skins-status').hide()
$('#skin_item_'+field.ID_loser).find('.status-widthdraw').html('<div class="game-item-overlay flex flex-col justify-center items-center w-full h-full absolute z-10 top-0 left-0"><div class="dot-loader absolute top-0 left-0 m-2 sm:m-4 text-gold group-hover:opacity-0 transition"><span></span><span></span><span></span></div><svg class="w-6 h-6 relative text-gold"><use xlink:href="'+
BASEURL+
'web/KD/static/icons.svg#hourglass"></svg>  <p class="mt-3 font-bold text-xs uppercase leading-none text-gold">'+
lang_title[26]+
'</p><p class="w-4/5 mt-2 font-bold text-2xs uppercase leading-none text-navy-200 text-center">'+
lang_title[27]+
'</p></div>')}
if(field.Stage==1){$('#skin_item_'+field.ID_loser).find('.skins-status').hide()
$('#skin_item_'+field.ID_loser).find('.status-widthdraw').html('<div class="game-item-overlay flex flex-col justify-center items-center w-full h-full absolute z-10 top-0 left-0"><div class="dot-loader absolute top-0 left-0 m-2 sm:m-4 text-gold group-hover:opacity-0 transition"><span></span><span></span><span></span></div><svg class="w-6 h-6 relative text-gold"><use xlink:href="'+
BASEURL+
'web/KD/static/icons.svg#hourglass"></svg>  <p class="mt-3 font-bold text-xs uppercase leading-none text-gold">'+
lang_title[28]+
'</p><p class="w-4/5 mt-2 font-bold text-2xs uppercase leading-none text-navy-200 text-center">'+
lang_title[29]+
'</p></div>')}
if(field.Stage==2){$('#skin_item_'+field.ID_loser).find('.skins-status').show()
$('#skin_item_'+field.ID_loser).find('.skins-status').attr('class','flex items-center absolute top-0 left-0 m-2 sm:m-4 px-1 py-3 font-bold text-2xs uppercase leading-none text-green skins-status').html('<div class="w-2 h-2 mr-1 bg-current rounded-full"></div>'+
lang_title[30]+
'')
$('#skin_item_'+field.ID_loser).find('.status-widthdraw').hide()}
if(field.Stage==3){if(field.Error)var error_info=field.Error
else var error_info=lang_title[31]
$('#skin_item_'+field.ID_loser).find('.skins-status').hide()
$('#skin_item_'+field.ID_loser).find('.status-widthdraw').html('<div class="game-item-overlay flex flex-col justify-center items-center w-full h-full absolute z-10 top-0 left-0"><svg class="w-6 h-6 relative text-red"><use xlink:href="'+
BASEURL+
'web/KD/static/icons.svg#hourglass"></svg>  <p class="mt-3 font-bold text-xs uppercase leading-none text-red">'+
lang_title[20]+
'</p><p class="w-4/5 mt-2 font-bold text-2xs uppercase leading-none text-navy-200 text-center">'+
error_info+
'</p></div>')}
if(field.Stage==5){$('#skin_item_'+field.ID_loser).find('.status-widthdraw').html('<div class="game-item-overlay flex flex-col justify-center items-center w-full h-full absolute z-10 top-0 left-0"><div class="dot-loader absolute top-0 left-0 m-2 sm:m-4 text-gold group-hover:opacity-0 transition"><span></span><span></span><span></span></div><svg class="w-6 h-6 relative text-gold"><use xlink:href="'+
BASEURL+
'web/KD/static/icons.svg#hourglass"></svg>  <p class="mt-3 font-bold text-xs uppercase leading-none text-gold">'+
lang_title[32]+
'</p><p class="w-4/5 mt-2 font-bold text-2xs uppercase leading-none text-navy-200 text-center">'+
lang_title[33]+
'</p></div>')
$('#skin_item_'+field.ID_loser).find('.skins-status').hide()}}})})}
function exchanger_skins($id){$.get(SITE_URL+'skins/Control/exchanger/'+$id,function(data){var obj=jQuery.parseJSON(data)
if(obj.Status==1){new Toast({type:'success',title:lang_title[21],message:obj.Info,duration:6000,})
$('#exchange-skin-modal .weapon-src').attr('src',obj.item.Icon)
$('#exchange-skin-modal .price').html(formatNumber(obj.item.Price))
$('#exchange-skin-modal .currency').html(obj.item.Currency)
$('#exchange-skin-modal .bg-color').addClass('bg-skins-'+obj.item.Bg+'')
$('#exchange-skin-modal .bg-color').addClass('glow-skins-'+obj.item.Bg+'')
$('#exchange-skin-modal .title-item').html(obj.item.Hash_name)
$('#exchange-skin-modal .title-description').html(obj.item.Description)
$('#exchange-skin-modal').find('.refresh-btn').attr('onclick','exchanger_list('+$id+')')
if(obj.item.MiniHS!='')
$('#exchange-skin-modal .MiniHS').html(obj.item.MiniHS).show()
open_modal('exchange-skin-modal')
exchanger_list($id)}else{new Toast({type:'failure',title:lang_title[20],message:obj.Info,duration:6000,})}})}
function exchanger_list($id){$('#exchange-skin-modal .loader').show()
$('#exchange-skin-modal .item-winner-list').html('')
$.get(SITE_URL+'skins/Control/exchanger_list/'+$id,function(data){$('#exchange-skin-modal .loader').hide()
var obj=jQuery.parseJSON(data)
if(obj.Status==1){new Toast({type:'success',title:lang_title[21],message:obj.Info,duration:6000,})
$.each(obj.item_list,function(i,field){var $item=''
$item=`<li class="flex flex-col new-item" data-id="`+
field.ID+
`" data-winner_id="`+
$id+
`">
          <div class="relative bg-navy-700 rounded-t overflow-hidden">
          <div style="padding-top: 60%"></div>
		  <div class="status-widthdraw"><div class="game-item-overlay flex flex-col justify-center items-center w-full h-full absolute z-10 top-0 left-0"><svg class="w-6 h-6 relative text-gold"><use xlink:href="`+
BASEURL+
`/web/KD/static/icons.svg#hourglass"></use></svg>  <p class="mt-3 font-bold text-xs uppercase leading-none text-gold">Proszę czekać...</p></div></div>
		  
          <img src="`+
BASEURL+
`/web/KD/static/images/bg_items_eq.jpg?v1" alt="" class="w-full h-full absolute top-0 left-0 object-cover light-skin">
          <img src="`+
field.Icon+
`" alt="" class="w-full h-full absolute top-0 left-0 object-contain light-skin">
          
          <div class="absolute top-0 right-0 mt-3 mr-3 px-3 py-1 font-bold text-xs text-white rounded bg-navy-900">
          <div role="tooltip" aria-label="Cena z oficjalnego sklepu steam" data-microtip-position="top-left" style="--microtip-font-size: 12px">
          `+
formatCurrency(field.Price,field.Currency)+
`
          </div>
          </div>`
if(field.Quality!=''){$item=$item+
`<div class="absolute top-0 left-10 mt-3 mr-3 px-3 py-1 font-bold text-xs text-white rounded bg-navy-900" style="margin-left: 10px;">
          `+
field.Quality+
`
          </div>
          `}
$item=$item+
`</div>
          <div class="w-full h-px relative  bg-skins-`+
field.Bg+
` glow-skins-`+
field.Bg+
`"></div>
          <div class="flex-1 flex flex-col justify-center items-center p-2 font-bold text-xs leading-none text-navy-100 text-center uppercase rounded-b bg-grey-900">
          <div class="font-bold">`+
field.Hash_name+
`</div>
          <div class="font-light">`+
field.Description+
`</div>
          </div>
       </li>`
$('#exchange-skin-modal .item-winner-list').append($item)})}else{new Toast({type:'failure',title:lang_title[20],message:obj.Info,duration:6000,})}})}
$('body').on('click','#exchange-skin-modal .new-item',function(){if($(this).hasClass('block')||$(this).hasClass('block_no_limit')){new Toast({type:'failure',title:lang_title[20],message:'Operacja jest realizowana, proszę czekać',duration:6000,})
return false}
$('#exchange-skin-modal .new-item').addClass('block')
$this=$(this)
$(this).addClass('block_no_limit')
$(this).removeClass('block')
$($this).find('.status-widthdraw').show()
var $id=$(this).data('id')
var $winner_id=$(this).data('winner_id')
$.post(SITE_URL+'/skins/Control/exchanges',{p1:$id,p2:$winner_id},function(data){var obj=jQuery.parseJSON(data)
if(obj.Status==1){new Toast({type:'success',title:lang_title[21],message:obj.Info,duration:6000,})
$($this).find('.status-widthdraw').hide()
setTimeout(function(){location.reload()},3000)}else{new Toast({type:'failure',title:lang_title[20],message:obj.Info,duration:6000,})
$($this).find('.status-widthdraw').hide()
if(obj.Remove){$('#exchange-skin-modal .item-winner-list').find('.new-item[data-id='+$id+']').remove()}}
$('#exchange-skin-modal .new-item').removeClass('block')
$('#exchange-skin-modal .new-item').removeClass('block_no_limit')})})
$('body').on('click','.platform-btn',function(){$('.platform-btn').removeClass('is-active')
var $type=$(this).data('type')
$(this).addClass('is-active')
$('.challanges-item').hide()
$('.challanges-item[data-'+$type+'=1]').show()})
$('body').on('submit','#giftcard',function(e){e.preventDefault()
payButton.loading()
$.post(SITE_URL+'payment/giftcard',$(this).serialize(),function(data){var obj=JSON.parse(data)
if(obj.Status==false){new Toast({type:'failure',title:lang_title[20],message:obj.Info,duration:6000,})
return false}else{new Toast({type:'success',title:lang_title[21],message:obj.Info,duration:6000,})
balance()}})})
$('body').on('click','#giftcard label',function(){$(this).find('.card-radio').prop('checked',true)})
$('body').on('submit','#g2a_open',function(e){e.preventDefault()
payButton.loading()
var val=0
var val=parseFloat($('#final-amount').val())
if(currency=='PLN')var $min=3
if(currency=='USD')var $min=1
if(val<$min){$('.doladuj-btn').html(lang_title[15])
new Toast({type:'failure',title:lang_title[20],message:lang_title[14]+' '+$min+' '+currency,duration:6000,})
return false}else{$.post(SITE_URL+'Payment/g2a_open',{Kwota:val},function(data){var obj=jQuery.parseJSON(data)
if(!obj.Status){new Toast({type:'failure',title:lang_title[20],message:obj.Info,duration:6000,})}else{new Toast({type:'success',title:lang_title[21],message:obj.Info,duration:6000,})
setTimeout(function(){location.href=obj.Url},2000)}})
$('.doladuj-btn').html(lang_title[15])}})
$('body').on('submit','#save-email',function(e){$.post(SITE_URL+'/Api/save_email',$(this).serialize(),function(data){var obj=jQuery.parseJSON(data)
if(obj.status){new Toast({type:'success',title:lang_title[21],message:obj.info,duration:6000,})
$('#help-form')[0].reset()}else{new Toast({type:'failure',title:lang_title[20],message:obj.info,duration:6000,})}})
e.preventDefault()})
$('body').on('click','.pagination li a',function(){clearInterval(refresh_market)
goToByScroll('load-views')
$('#load-views .game-items-grid').css('opacity','0.3')
var $page=$(this).data('ci-pagination-page')
$('#load-views').load(SITE_URL+'/panel/Profil/my_winner/'+$page,function(){$('#load-views .game-items-grid').css('opacity','1')})})
$('body').on('submit','#skins_open',function(e){e.preventDefault()
payButton.loading()
getSkinsPay()})
function getSkinsPay(){$.post(SITE_URL+'Payment/skins_pay',function(data){var obj=jQuery.parseJSON(data)
if(obj.Status==1){new Toast({type:'success',title:lang_title[21],message:obj.Info,duration:6000,})
location.href=obj.Url}else{new Toast({type:'failure',title:lang_title[20],message:obj.Info,duration:6000,})}})}
$('body').on('submit','#UnitPayForm',function(e){e.preventDefault()
payButton.loading()
var val=0
var val=parseFloat($('#final-amount').val())
if(currency=='PLN')var $min=3
if(currency=='USD')var $min=1
if(val<$min){$('.doladuj-btn').html(lang_title[15])
new Toast({type:'failure',title:lang_title[20],message:lang_title[14]+' '+$min+' '+currency,duration:6000,})
return false}else{$.post(SITE_URL+'Payment/unitpay',{Kwota:val},function(data){var obj=jQuery.parseJSON(data)
if(obj.Status==1){new Toast({type:'success',title:lang_title[21],message:obj.Info,duration:6000,})
location.href=obj.Url}else{new Toast({type:'failure',title:lang_title[20],message:obj.Info,duration:6000,})}})}})
function reportGeoData(){$.ajax({url:SITE_URL+'Api/geoStat'})}
function getGeo(){if(localStorage.lastGeoCheck){var interfal=1000*60*60*24
if(Date.now()-+localStorage.lastGeoCheck>=interfal){reportGeoData()
localStorage.lastGeoCheck=Date.now()}}else{reportGeoData()
localStorage.lastGeoCheck=Date.now()}}
$('body').on('click','.pp-withdraw-pack input',function(){$('#kwota_wyplaty').val($(this).val())
$('#pp-withdraw-form #kwota').val($(this).val())})
$('body').on('submit','#paymenterio',function(e){e.preventDefault()
payButton.loading()
var kwota=parseFloat($('#final-amount').val())
if(kwota!=''){if(currency=='PLN')var $min=3
if(currency=='USD')var $min=1
if(kwota<$min){$('.doladuj-btn').html(lang_title[15])
new Toast({type:'failure',title:lang_title[20],message:lang_title[14]+' '+$min+' '+currency,duration:6000,})
return false}else{$.post(SITE_URL+'Payment/paymenterio',$(this).serialize(),function(data){var obj=JSON.parse(data)
if(obj.status==false){new Toast({type:'failure',title:lang_title[20],message:obj.info,duration:6000,})
return false}else{new Toast({type:'success',title:lang_title[21],message:obj.info,duration:6000,})
location.href=obj.url}})}}})
function updateStats(){$.get(SITE_URL+'skins/Control/updateStats')}
$('body').on('submit','#form_zadania_oneCasino',function(event){var $function=$(this).find('#function').val()
var $csrf=$('#csrfToken').val();var $val=$("#form_zadania_oneCasino").find("#idAccount").val();var $ID=$("#form_zadania_oneCasino").find("#id_zadania").val();$.post(SITE_URL+'Challenges/send_'+$function,{ID:$ID,idAccount:$val,csrf_token:$csrf,function:$function}).done(function(obj){$('#csrfToken').val(obj.csrf);if(obj.status==1){new Toast({type:'success',title:lang_title[21],message:obj.info,duration:6000,})}else{new Toast({type:'failure',title:lang_title[20],message:obj.info,duration:6000,})}}).fail(function(){new Toast({type:'failure',title:lang_title[20],message:lang_title[16],duration:6000,})})
event.preventDefault()})
$('body').on('submit','#form_zadania_oneCasinoLvl',function(event){var $function=$(this).find('#function').val()
var $csrf=$('#csrfToken').val();var $val=$("#form_zadania_oneCasinoLvl").find("#idAccount").val();var $ID=$("#form_zadania_oneCasinoLvl").find("#id_zadania").val();$.post(SITE_URL+'Challenges/send_'+$function,{ID:$ID,idAccount:$val,csrf_token:$csrf,function:$function}).done(function(obj){$('#csrfToken').val(obj.csrf);if(obj.status==1){new Toast({type:'success',title:lang_title[21],message:obj.info,duration:6000,})}else{new Toast({type:'failure',title:lang_title[20],message:obj.info,duration:6000,})}}).fail(function(){new Toast({type:'failure',title:lang_title[20],message:lang_title[16],duration:6000,})})
event.preventDefault()})
$('body').on('submit','#creditcard',function(e){e.preventDefault()
payButton.loading()
var val=0
var val=parseFloat($('#final-amount').val())
if(currency=='PLN')var $min=3
if(currency=='USD')var $min=1
if(val<$min){$('.doladuj-btn').html(lang_title[15])
new Toast({type:'failure',title:lang_title[20],message:lang_title[14]+' '+$min+' '+currency,duration:6000,})
return false}else{$.post(SITE_URL+'Payment/creditCard',{amount:val},function(obj){if(obj.status==true){new Toast({type:'success',title:lang_title[21],message:obj.message,duration:6000,})
location.href=obj.redirect_to}else{new Toast({type:'failure',title:lang_title[20],message:obj.message,duration:6000,})}})}})