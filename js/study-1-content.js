
var myWaterFlow = WaterfallFlow.flow.extend({

    doExtendJob: function() {
        console.log("doMyjob");
        this.listenScroll();
    },

    listenScroll: function() {
        var self = this;
        window.addEventListener('scroll', function() {
            var scrollTop = getScrollTop();
            var winHeight = getWindowHeight();
            var scrollHeight = getScrollHeight();
            if(scrollTop + winHeight >= scrollHeight) {
                self.loadMore();
            }
        });
    }
});

function getScrollTop() {
    var scrollTop = 0,
        bodyScrollTop = 0,
        documentScrollTop = 0;
    if(document.body) {
        bodyScrollTop = document.body.scrollTop || 0;
    }
    if(document.documentElement) {
        documentScrollTop = document.documentElement.scrollTop || 0;
    }
    scrollTop = (bodyScrollTop > documentScrollTop) ? bodyScrollTop : documentScrollTop;
    return scrollTop;
}

function getScrollHeight() {
    var scrollHeight = 0,
        bodyScrollHeight = 0,
        documentScrollHeight = 0;
    if(document.body) {
        bodyScrollHeight = document.body.scrollHeight;
    }
    if(document.documentElement) {
        documentScrollHeight = document.documentElement.scrollHeight;
    }
    scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
    return scrollHeight;
};

function getWindowHeight() {
    var windowHeight = 0;
    if(document.compatMode == "CSS1Compat") {
        windowHeight = document.documentElement.clientHeight;
    } else {
        windowHeight = document.body.clientHeight;
    }
    return windowHeight;
};

var demo = {
    initGrid: function() {
        var index = 0;
        var flow = new myWaterFlow('.grid-container', {
            gridSelector: '.grid',
            itemSelector: '.grid-item',
            columnWidth: 240,
            gutter: 20,
            loadSuccess: function(self, isInit) {
                if(isInit) {
                    //self.load('<div class="grid-item"><a class="demo-img"href="{{demoLink}}"><img src="{{imgLink}}"></a><h3 class="demo-title"><a href="{{demoLink}}">{{title}}</a></h3><p>Relevant：{{relevant}}</p><p>{{description}}<a href="{{codeLink}}">&nbsp;&nbsp;Link&nbsp;&nbsp;<i class="icon icon-code"></i></a></p></div>');
                } else {
                    // do nothing
                }
            }
        });
        return flow;
    },

    getHtmlByContent: function(content) {
        var html = '';
        var litemplate =
            '<div class="grid-item"><a class="demo-img" href="{{demoLink}}" data-toggle="modal" data-target="#myModal" onclick="getContent({{num}})"><img src="{{imgLink}}"></a><h3 class="card-title"><a href="{{demoLink}}" data-toggle="modal" data-target="#myModal" onclick="getContent({{num}})">{{title}}</a></h3><p>品牌：{{relevant}}</p><p id="p-line">{{description}}</p><button type="button" class="btn btn-primary btn-sm donate_btn" data-toggle="modal" data-target="#myModal" onclick="getContent({{num}})">选择</button></div>';
        for(var i = 0, len = content.length; i < len; i++) {
            var tmp = content[i];
            html += litemplate.replace(/\{\{demoLink\}\}/g, tmp.demoLink)
                .replace(/\{\{imgLink\}\}/g, tmp.imgLink)
                .replace(/\{\{num\}\}/g, i)
                .replace(/\{\{relevant\}\}/g, tmp.relevant)
                .replace(/\{\{title\}\}/g, tmp.title)
                .replace(/\{\{description\}\}/g, tmp.description);
        }
        return html;
    },

    init_chocolate: function(flag) {
        var demoContent = [{
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/chocolate/chocolate-1.jpg',
            title: '牛奶焦糖巧克力',
            relevant: 'LORE\'S',
            description: '我们的招牌配方: 简单的焦糖奶油和黄油, 上面涂上浓郁的巧克力, 可带来柔滑的甜食!'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/chocolate/chocolate-2.jpg',
            title: '百味巧克力',
            relevant: 'JOHN&KIRA\'S',
            description: '我们的6种口味的"每种口味"组合是您在假期期间为您的朋友和家人提供特殊对待的完美方式!'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/chocolate/chocolate-3.jpg',
            title: '焦糖类巧克力',
            relevant: 'Shane Confectionery',
            description: '各种各样的传统焦糖! 您可以选择-我们所有的香草, 海盐和蘸有牛奶和黑巧克力的巧克力味焦糖!'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/chocolate/chocolate-4.jpg',
            title: '黑巧克力系列',
            relevant: 'MignonChocolate',
            description: '使用最上乘的美味可可将浓郁, 浓郁的黑巧克力完美融合, 将您带入另一个甜蜜的时光!'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/chocolate/chocolate-5.jpg',
            title: '什锦巧克力',
            relevant: 'MUELLER',
            description: '您可以选择各种美味的手工制作的巧克力糖果, 包括牛奶，深色或混合牛奶!'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/chocolate/chocolate-6.jpg',
            title: '摩卡咖啡巧克力',
            relevant: 'FREY',
            description: '用脆巧克力包裹的美味精致馅料! 这些小宝贝宝库的味道正在等待被发现! 独特, 令人惊讶, 始终如此令人愉悦!'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/chocolate/chocolate-7.jpg',
            title: '德芙牛奶巧克力',
            relevant: 'Dove',
            description: '印度农村地区的巧克力口味! 经典广告语: "牛奶香浓，丝般感受"! DOVE: "DO YOU LOVE ME"!'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/chocolate/chocolate-8.jpg',
            title: '瑞士奢华',
            relevant: 'Lindt',
            description: '精致典雅的欧式果仁糖系列, 以我们精美的牛奶, 黑巧克力和白巧克力精制而成, 并搭配焦糖, 橙子, 榛子和意大利细面条等口味!'
        }];

        if(flag == true) {
            var html = this.getHtmlByContent(demoContent);
            var grid = document.querySelector('.grid');

            grid.innerHTML = html;

            var flow = this.initGrid();
        }
        else {
            return demoContent;
        }
    },

    init_toothpaste: function(flag) {
        var demoContent = [{
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/toothpaste/toothpaste-1.jpg',
            title: '佳洁士完全美白牙膏',
            relevant: 'Crest, Toothpaste',
            description: '当干净和新鲜在一起时, 他们创造了一种牙膏, 可提供佳洁士的去污力和薄荷Scope的清新口气! 它是清洁与清新的终极组合: 它有助于抵抗蛀牙, 防止牙垢, 并通过清洁作用使牙齿增白, 从而有助于清除表面的污渍, 同时还能使您的口气清新如水, 并为任何事情做好准备!'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/toothpaste/toothpaste-5.jpg',
            title: '高露洁光学白气泡薄荷牙膏',
            relevant: 'Colgate, Toothpaste',
            description: '高露洁光学白气泡薄荷美白牙膏经过特别设计, 可帮助您在清新口气的同时获得白皙的微笑! 它可以在一周内使牙齿变白 (为达到最佳效果，请按照说明使用4周), 并且不仅可以去除表面污渍, 还可以深层变白 (每天刷牙两次，持续4周)! 其搪瓷安全, 抗龋齿的氟化物配方有助于保护牙齿免受蛀牙的影响, 同时清除您一直想要的白色清新微笑的污渍!'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/toothpaste/toothpaste-6.jpg',
            title: 'hello 舒缓氟化物牙膏',
            relevant: 'hello, Toothpaste',
            description: '因为敏感的牙齿需要一点爱和关爱! hello®牙膏含氟化物, 椰子油和芦荟, 可用于敏感牙齿!'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/toothpaste/toothpaste-7.jpg',
            title: 'CloSYS无硫酸盐氟化物牙膏',
            relevant: 'CloSYS, Toothpaste',
            description: 'CloSYS中的Cloralstan™配方可被唾液中的氨基酸自然激活, 从而消除了可能导致口腔和身体其他健康问题的细菌和细菌, 从而给您带来信心!'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/toothpaste/toothpaste-8.jpg',
            title: '优质锌离子牙膏',
            relevant: 'SmartMouth',
            description: 'SmartMouth优质锌离子牙膏将锌离子技术与氟化物结合在一起, 可增强牙釉质, 去除牙菌斑, 预防蛀牙并提供敏感的美白效果-所有这些均具有温和的薄荷味且无余味!'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/toothpaste/toothpaste-9.jpg',
            title: 'VEGAN B-12 美白牙膏',
            relevant: 'CALI WHITE',
            description: '我们与大自然母亲合作, 提供了地球上最有效的美白和排毒成分的牙膏! 然后, 我们通过向人体注入最高质量, 最具吸收性的B12 (甲基钴胺素), 将其提升到一个新的水平! 感觉良好并增加微笑可能是副作用!'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/toothpaste/toothpaste-10.jpg',
            title: 'Apeiron Auromère 草药牙膏',
            relevant: 'Apeiron, Toothpaste',
            description: '牙膏中的24种有效植物结合在一起-这种草药牙膏是来自自然宝库的天然产品! 印em, 丁香油和甘草的提取物可对抗引起牙菌斑和蛀牙的细菌!'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/toothpaste/toothpaste-12.jpg',
            title: '格兰特美白牙膏',
            relevant: 'Grants, Toothpaste',
            description: '格兰特(Grants) 美白牙膏含小苏打的美白牙膏具有浓郁, 凉爽的薄荷味, 使口感清新洁净! 小苏打有助于自然美白牙齿并去除污渍!'
        }];

        if(flag == true) {
            var html = this.getHtmlByContent(demoContent);
            var grid = document.querySelector('.grid');

            grid.innerHTML = html;

            var flow = this.initGrid();
        }
        else {
            return demoContent;
        }
    }
};

$(function() {
    $('#myModal').modal('hide');
});

$(function() {
    $('#myModal').on('show.bs.modal',
    function() {
        showDetail()
    });
});

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

var content_num = getUrlVars()['content_num'];
if(content_num == 1) {
    demo.init_chocolate(true);
}
else if(content_num == 2) {
    demo.init_toothpaste(true);
}
else {
    alert("Invalid content number.")
}

var case_num = getUrlVars()['case_num']

function finish() {
    window.location.href = "thanks.html?study_num=1&case_num=" + case_num;
}

var t;
var imgLink_1;
var title_1;
var relevant_1;
var description_1;

function getContent(num) {
    var demoCont;
    if(content_num == 1) {
        demoCont = demo.init_chocolate(false);
    }
    else {
        demoCont = demo.init_toothpaste(false);
    }
    imgLink_1 = demoCont[num].imgLink;
    title_1 = demoCont[num].title;
    relevant_1 = demoCont[num].relevant;
    description_1 = demoCont[num].description;
}

function showDetail() {
    var bodyD = `<div class="card mb-3" style="max-width: 720px;">
                    <div class="row no-gutters">
                    <div class="col-md-4 d-flex align-items-center">
                        <img src="${imgLink_1}" class="card-img">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${title_1}</h5>
                            <p class="card-text">品牌: ${relevant_1}</p>
                            <p class="card-text">描述: ${description_1}</p>
                        </div>
                    </div>
                    </div>
                </div>
                `;
    document.querySelector('#content_detail').innerHTML = bodyD;
}
