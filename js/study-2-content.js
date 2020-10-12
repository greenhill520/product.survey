
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
            '<div class="grid-item"><a class="demo-img" href="{{demoLink}}" data-toggle="modal" data-target="#myModal" onclick="getContent({{num}}, 1)"><img src="{{imgLink}}"></a><h3 class="demo-title"><a href="{{demoLink}}" data-toggle="modal" data-target="#myModal" onclick="getContent({{num}}, 1)">{{title}}</a></h3><p>Artist：{{relevant}}</p><p>Album: {{description}}</p><button type="button" class="btn btn-primary btn-sm donate_btn" data-toggle="modal" data-target="#myModal" onclick="getContent({{num}}, 1)">Select</button></div>';
        for(var i = 0, len = content.length; i < len; i++) {
            var tmp = content[i];
            html += litemplate.replace(/\{\{demoLink\}\}/g, tmp.demoLink)
                .replace(/\{\{imgLink\}\}/g, tmp.imgLink)
                .replace(/\{\{relevant\}\}/g, tmp.relevant)
                .replace(/\{\{title\}\}/g, tmp.title)
                .replace(/\{\{description\}\}/g, tmp.description)
                .replace(/\{\{num\}\}/g, i);
        }
        return html;
    },

    getHtmlByContent2: function(content) {
        var html = '';
        var litemplate =
            '<div class="grid-item"><a class="demo-img" href="{{demoLink}}" data-toggle="modal" data-target="#myModal" onclick="getContent({{num}}, 2)"><img src="{{imgLink}}"></a><h3 class="demo-title"><a href="{{demoLink}}" data-toggle="modal" data-target="#myModal" onclick="getContent({{num}}, 2)">{{title}}</a></h3><p id="p-line">{{description}}</p><button type="button" class="btn btn-primary btn-sm donate_btn" data-toggle="modal" data-target="#myModal" onclick="getContent({{num}}, 2)">Select</button></div>';
        for(var i = 0, len = content.length; i < len; i++) {
            var tmp = content[i];
            html += litemplate.replace(/\{\{demoLink\}\}/g, tmp.demoLink)
                .replace(/\{\{imgLink\}\}/g, tmp.imgLink)
                .replace(/\{\{title\}\}/g, tmp.title)
                .replace(/\{\{description\}\}/g, tmp.description)
                .replace(/\{\{num\}\}/g, i);
        }
        return html;
    },

    init_music: function(flag) {
        var demoContent = [{
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/music/music-1.jpg',
            title: 'When I am with you',
            relevant: 'JJ Heller',
            description: 'I Dream of You'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/music/music-2.jpg',
            title: 'Back to you',
            relevant: 'Selena Gomez',
            description: 'Helix (Volume 2)'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/music/music-3.jpg',
            title: 'Bitter Love',
            relevant: 'Pia Mia',
            description: 'Bitter Love'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/music/music-4.jpg',
            title: 'Never Enough',
            relevant: 'Travis Atreo',
            description: 'Never Enough'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/music/music-5.jpg',
            title: 'Havana',
            relevant: 'Camila Cabello',
            description: 'Camila'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/music/music-6.jpg',
            title: 'Battlefield',
            relevant: 'Jordin Sparks',
            description: 'Battlefiled'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/music/music-7.jpg',
            title: 'Take A Bow',
            relevant: 'Rihanna',
            description: 'Good Girl Gone Bad'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/music/music-8.jpg',
            title: 'None of My Business',
            relevant: 'Cher Lloyd',
            description: 'None of My Business'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/music/music-9.jpg',
            title: 'Head Above Water',
            relevant: 'Avril Lavigne',
            description: 'Head Above Water'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/music/music-10.jpg',
            title: 'Better in Time',
            relevant: 'Leona Lewis',
            description: 'Spirit'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/music/music-11.jpg',
            title: 'Call Me Maybe',
            relevant: 'Carly Rae Jepsen',
            description: 'Kiss (Deluxe)'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/music/music-12.jpg',
            title: 'Chandelier',
            relevant: 'Sia',
            description: '1000 Forms of Fear'
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

    init_course: function(flag) {
        var demoContent = [{
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/course/course-1.jpg',
            title: 'Summit Art 1',
            relevant: 'Art',
            description: 'Art 1 lessons include an introduction to the art and architecture of different cultures such as Mesopotamia and ancient Egypt, Greece, and China. '
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/course/course-2.jpg',
            title: 'Summit History 1',
            relevant: 'History',
            description: 'This course kicks off a program that, spanning the elementary grades, provides an overview of world geography and history from the Stone Age to the Space Age. '
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/course/course-3.jpg',
            title: 'English Language Arts 5',
            relevant: 'Language, Art',
            description: 'Summit English Language Arts 5 provides a well-balanced approach to literacy that connects reading, writing, grammar, vocabulary, and spelling into one integrated program.'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/course/course-4.jpg',
            title: 'Summit Geometry',
            relevant: 'Math',
            description: 'This Summit Geometry course builds on the geometry covered in middle school to explore more complex geometric situations and deepen students’ ability to explain geometric relationships, moving toward formal mathematical arguments.'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/course/course-5.jpg',
            title: 'Anatomy & Physiology 1',
            relevant: 'Science',
            description: 'The course provides a thorough introduction to the basics required for the study of the human body and how it functions.'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/course/course-6.jpg',
            title: 'Summit Science 2',
            relevant: 'Social Science',
            description: 'Students perform experiments to develop skills of observation and analysis, and learn how scientists understand the world. '
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/course/course-7.jpg',
            title: 'Physical Science',
            relevant: 'Social Science',
            description: 'The physical science curriculum introduces students to many aspects of the physical world, focusing first on chemistry and then on physics.'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/course/course-8.jpg',
            title: 'Music Appreciation',
            relevant: 'Art',
            description: 'This Fine Art course introduces students to the history, theory, and genres of music. The course explores the history of music, from the surviving examples of rudimentary musical forms through to contemporary pieces from around the world.'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/course/course-9.jpg',
            title: 'Digital Photography',
            relevant: 'Technology',
            description: 'This course focuses on the basics of photography, including building an understanding of aperture, shutter speed, lighting, and composition.'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/course/course-10.jpg',
            title: 'Python Programming',
            relevant: 'Technology',
            description: 'This course presents essential computer science topics, while also instructing on the Python programming language.'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/course/course-11.jpg',
            title: 'French I, Part 1',
            relevant: 'Languages',
            description: 'Students begin their introduction to French by focusing on the four key areas of world language study: listening, speaking, reading, and writing. The course represents an ideal blend of language learning pedagogy and online learning.'
        }, {
            demoLink: 'https://www.baidu.com',
            imgLink: 'imgs/course/course-12.jpg',
            title: 'Introduction to Marketing',
            relevant: 'Others',
            description: 'Students learn the fundamentals of marketing using real-world business examples. They learn about buyer behavior, marketing research principles, demand analysis, distribution, financing, pricing, and product management.'
        }];

        if(flag == true) {
            var html = this.getHtmlByContent2(demoContent);
            var grid = document.querySelector('.grid');

            grid.innerHTML = html;

            var flow = this.initGrid();
        }
        else {
            return demoContent;
        }
    }
};


function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

var catalog_num = getUrlVars()['catalog_num'];
var case_num = getUrlVars()['case_num'];

if(catalog_num == 1) {
    demo.init_music(true);
}
else if(catalog_num == 2) {
    demo.init_course(true);
}
else {
    alert("Invalid catalog number.")
}

var WaitTime = 17;
var t;
var imgLink_1;
var title_1;
var relevant_1;
var description_1;
var musicOrCourse_1;

function showDetail() {
    var bodyD;
    if(musicOrCourse_1 == 1) {
        bodyD = `<div class="card mb-3" style="max-width: 720px;">
                    <div class="row no-gutters">
                    <div class="col-md-4 d-flex align-items-center">
                        <img src="${imgLink_1}" class="card-img">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${title_1}</h5>
                            <p class="card-text">Artist: ${relevant_1}</p>
                            <p class="card-text">Album: ${description_1}</p>
                        </div>
                    </div>
                    </div>
                </div>
                `;
        document.querySelector('#loading-img').innerHTML = bodyD;
        document.querySelector('#myModalLabel').innerHTML = "Are you sure you choose this music?";
    }
    else {
        bodyD = `<div class="card mb-3" style="max-width: 720px;">
                    <div class="row no-gutters">
                    <div class="col-md-4 d-flex align-items-center">
                        <img src="${imgLink_1}" class="card-img">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${title_1}</h5>
                            <p class="card-text">Type: ${relevant_1}</p>
                            <p class="card-text">Description: ${description_1}</p>
                        </div>
                    </div>
                    </div>
                </div>
                `;
        document.querySelector('#loading-img').innerHTML = bodyD;
        document.querySelector('#myModalLabel').innerHTML = "Are you sure you choose this course?";
    }
    document.getElementById('s-submit').style.visibility = "visible";
}

function WaitDo(){
    if(WaitTime > 0){
        WaitTime --;
        t = setTimeout(WaitDo, 1000);
    }
    else
    {
        showDetail();
    }
}

$(function() {
    $('#myModal').modal('hide');
});

$(function() {
    $('#myModal').on('show.bs.modal',
    function() {
        WaitTime = 17;
        if( case_num > 0 && case_num < 4 ) {
            box_num = 1;
            if(case_num == 1) {
                box_num = 1;
            }
            else if(case_num == 2) {
                box_num = 2;
            }
            else {
                box_num = 3;
            }
            
            src_path = "imgs/dog/dog-" + box_num + ".gif";
            _img = `<img src="${src_path}" style="max-width: 100%; height: auto;"class="rounded">`;
            document.querySelector('#loading-img').innerHTML = _img;
        }

        WaitDo();
        
    });
});

function stopTimeout() {
    clearTimeout(t);
}

function getContent(num, musicOrCourse) {
    var demoCont;
    if(musicOrCourse == 1) {
        demoCont = demo.init_music(false);
    }
    else {
        demoCont = demo.init_course(false);
    }
    imgLink_1 = demoCont[num].imgLink;
    title_1 = demoCont[num].title;
    relevant_1 = demoCont[num].relevant;
    description_1 = demoCont[num].description;
    musicOrCourse_1 = musicOrCourse;
}

function finish() {
    window.location.href = "thanks.html?study_num=2&catalog_num=" + catalog_num + "&case_num=" + case_num;
}
