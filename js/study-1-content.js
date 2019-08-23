
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
            '<div class="grid-item"><a class="demo-img" href="{{demoLink}}" data-toggle="modal" data-target="#myModal"><img src="{{imgLink}}"></a><h3 class="card-title"><a href="{{demoLink}}" data-toggle="modal" data-target="#myModal">{{title}}</a></h3><p>Relevant：{{relevant}}</p><p id="p-line">{{description}}</p><button type="button" class="btn btn-primary btn-sm donate_btn" data-toggle="modal" data-target="#myModal" onclick="getContent({{num}})">Select</button></div>';
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
            title: 'Milk Chocolate Caramels',
            relevant: 'LORE\'S',
            description: 'Our signature recipe: simply caramelized cream and butter, covered in rich chocolate, resulting in a tender and smooth confection.'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/chocolate/chocolate-2.jpg',
            title: 'Every Flavor Chocolates',
            relevant: 'JOHN&KIRA\'S',
            description: 'Our 6-piece Every Flavor assortment is the perfect way for you to give your friends and family a special treat this Holiday.'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/chocolate/chocolate-3.jpg',
            title: 'Caramel Assortment',
            relevant: 'Shane Confectionery',
            description: 'An assortment of our traditional caramels. Your choice of an assortment of: – All our vanilla, sea salt, and chocolate flavored caramels dipped in milk and dark chocolate.'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/chocolate/chocolate-4.jpg',
            title: 'Dark Chocolate Collection',
            relevant: 'MignonChocolate',
            description: 'The Dark Chocolate collection with bold and rich flavors beautifully blended using the finest gourmet cocoa will transport you to another time when life was sweeter.'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/chocolate/chocolate-5.jpg',
            title: 'Assorted Chocolates',
            relevant: 'MUELLER',
            description: 'An assortment of delicious hand made chocolate candies in your choice of milk, dark or a combination.'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/chocolate/chocolate-6.jpg',
            title: 'LES ADORABLES MOCHA',
            relevant: 'FREY',
            description: 'Deliciously refined fillings encased in crisp chocolate. These little treasures troves of flavour are waiting to be discovered. Unique, surprising – and always so utterly delectable.'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/chocolate/chocolate-7.jpg',
            title: 'Dove Milk Chocolate',
            relevant: 'Dove',
            description: 'Rural India develops taste for chocolate.'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/chocolate/chocolate-8.jpg',
            title: 'Swiss Luxury',
            relevant: 'Lindt',
            description: 'A sophisticated collection of elegant European style pralines, crafted with our exquisite milk, dark and white chocolate and paired with flavors like caramel, orange, hazelnut and stracciatella.'
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
            title: 'Crest Complete Whitening + Scope Toothpaste',
            relevant: 'Crest, Toothpaste',
            description: 'When clean and fresh got together, they created a toothpaste that delivers the stain-removing power of Crest and the breath freshening blast of minty Scope. It’s the ultimate combination of clean and fresh: it helps fight cavities, prevents tartar, and provides teeth whitening from cleaning action that helps to remove surface stains, all while helping to keep your breath minty fresh and ready for anything.'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/toothpaste/toothpaste-5.jpg',
            title: 'Colgate Optic White Sparkling Mint Whitening',
            relevant: 'Colgate, Toothpaste',
            description: 'Colgate Optic White Sparkling Mint Toothpaste is specially designed to help you get a white smile while freshening your breath. It delivers whiter teeth in one week (for best results, use as directed for 4 weeks), and goes beyond surface stain removal to deeply whiten (brushing twice daily for 4 weeks). Its enamel-safe, anticavity fluoride formula helps protect teeth from cavities while removing stains for the white, fresh smile you\'ve always wanted.'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/toothpaste/toothpaste-6.jpg',
            title: 'hello soothing relief fluoride toothpaste',
            relevant: 'hello, Toothpaste',
            description: 'Because sensitive teeth need a little love and affection. hello® toothpaste for sensitive teeth with fluoride, coconut oil and aloe vera.'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/toothpaste/toothpaste-7.jpg',
            title: 'CloSYS Sulfate-Free Fluoride Toothpaste',
            relevant: 'CloSYS, Toothpaste',
            description: 'The Cloralstan™ formula in CloSYS is naturally activated by the amino acids in saliva giving you the confidence that comes from eliminating the germs and bacteria that may cause other health issues in your mouth and body.'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/toothpaste/toothpaste-8.jpg',
            title: 'Premium Zinc Ion Toothpaste',
            relevant: 'SmartMouth',
            description: 'SmartMouth Premium Zinc Ion Toothpaste combines zinc ion technology with fluoride to strengthen enamel, remove dental plaque, prevent cavities and provide sensitive whitening — all with a mild mint flavor and no aftertaste.'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/toothpaste/toothpaste-9.jpg',
            title: 'VEGAN B-12 INFUSED TEETH WHITENING',
            relevant: 'CALI WHITE',
            description: 'We teamed up with Mother Nature to deliver a toothpaste with the most effective whitening and detoxifying ingredients on Earth. We then took it to the next level by infusing it with the highest quality, most absorbent B12 (Methylcobalamin), for the human body. Feeling great and increased smiling are possible side effects.'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/toothpaste/toothpaste-10.jpg',
            title: 'Apeiron Auromère Herbal Toothpaste',
            relevant: 'Apeiron, Toothpaste',
            description: '24 effective plants in a toothpaste combined - this herbal toothpaste is a natural product from the treasure chest of nature. Extracts of Neem, clove oil, and liquorice work against plaque-and cavity-causing bacteria.'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/toothpaste/toothpaste-12.jpg',
            title: 'Grants Whitening Toothpaste',
            relevant: 'Grants, Toothpaste',
            description: 'Grants Whitening Toothpaste with Baking Soda has a strong, cool minty taste that leaves the mouth feeling fresh and clean. Baking Soda helps to naturally whiten teeth and remove stains.'
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
                            <p class="card-text">Revevant: ${relevant_1}</p>
                            <p class="card-text">Description: ${description_1}</p>
                        </div>
                    </div>
                    </div>
                </div>
                `;
    document.querySelector('#content_detail').innerHTML = bodyD;
}
