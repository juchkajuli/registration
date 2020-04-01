Vue.component('header-component' , {
    data: function () {
        return {
            title: "Named"
        };
    },
    template: '<div class="header__cont"><div class="header"><img src="img/cat.svg" alt="Логотип" class="logo"><span class="name-logo">Photobook</span></div></div>'
});
new Vue ({ el: '#header-demo'});

Vue.component('footer-component', {
    data: function () {
        return {
            title: ""
        };
    },
    template:'<div class="footer_content"><nav class="footer_menu"><ul class="list_foot"><li class="li_footer"><a href="#" class="link_foot"> О нас </a></li><li class="li_footer"><a href="#" class="link_foot"> Помощь </a></li><li class="li_footer"><a href="#" class="link_foot"> Конфиденциальность </a></li><li class="li_footer"><a href="#" class="link_foot"> Условия </a></li><li class="li_footer"><a href="#" class="link_foot"> Реклама </a></li><li class="li_footer"><a href=# class="link_foot"> Язык </a></li></ul></nav></div>'
});
new Vue ({ el: '#footer-demo'});
