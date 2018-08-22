;
(function($, root) {
    var models = [
	{ "id": "1801sk12", "title": "KS-1(法国)", "cpu": "Atom™ D425", "ram": "2 GB", "disk": "500 GB", "network": "100 Mbps", "price": "€ 3.99", "type": "ks" ,"link":"https://www.kimsufi.com/en/order/kimsufi.xml?reference="},
    { "id": "1801sk13", "title": "KS-2(法国)", "cpu": "Atom™ N2800", "ram": "4 GB", "disk": "1 TB", "network": "100 Mbps", "price": "€ 4.99", "type": "ks" ,"link":"https://www.kimsufi.com/en/order/kimsufi.xml?reference="},
    { "id": "1801sk14", "title": "KS-3(法国)", "cpu": "Atom™ N2800", "ram": "4 GB", "disk": "2 TB", "network": "100 Mbps", "price": "€ 7.99", "type": "ks" ,"link":"https://www.kimsufi.com/en/order/kimsufi.xml?reference="},
    { "id": "1801sk15", "title": "KS-4(法国)", "cpu": "Atom™ N2800", "ram": "4 GB", "disk": "SoftRaid 2x2TB", "network": "100 Mbps", "price": "€ 13.99", "type": "ks" ,"link":"https://www.kimsufi.com/en/order/kimsufi.xml?reference="},
    { "id": "1801sk16", "title": "KS-5(法国)", "cpu": "AMD Opteron 4122", "ram": "16 GB", "disk": "2 TB", "network": "100 Mbps", "price": "€ 13.99", "type": "ks" ,"link":"https://www.kimsufi.com/en/order/kimsufi.xml?reference="},
    { "id": "1801sk17", "title": "KS-6(法国)", "cpu": "Intel i5-750", "ram": "16 GB", "disk": "2 TB", "network": "100 Mbps", "price": "€ 14.99", "type": "ks" ,"link":"https://www.kimsufi.com/en/order/kimsufi.xml?reference="},
    { "id": "1801sk18", "title": "KS-7(法国)", "cpu": "Intel i3-2130", "ram": "8 GB", "disk": "2 TB", "network": "100 Mbps", "price": "€ 14.99", "type": "ks" ,"link":"https://www.kimsufi.com/en/order/kimsufi.xml?reference="},
    { "id": "1801sk19", "title": "KS-8(法国)", "cpu": "Intel i7-920", "ram": "16 GB", "disk": "2 TB", "network": "100 Mbps", "price": "€ 15.99", "type": "ks" ,"link":"https://www.kimsufi.com/en/order/kimsufi.xml?reference="},
    { "id": "1801sk20", "title": "KS-9(法国)", "cpu": "Intel Xeon W3520", "ram": "16 GB", "disk": "240GB SSD", "network": "100 Mbps", "price": "€ 16.99", "type": "ks" ,"link":"https://www.kimsufi.com/en/order/kimsufi.xml?reference="},
	{ "id": "1804sk21", "title": "KS-10(法国)", "cpu": "Core™ i5-2300", "ram": "16 GB", "disk": "2TB", "network": "100 Mbps", "price": "€ 18.99", "type": "ks" ,"link":"https://www.kimsufi.com/en/order/kimsufi.xml?reference="},
	{ "id": "1804sk22", "title": "KS-11(法国)", "cpu": "Intel Xeon W3520", "ram": "16 GB", "disk": "2x2TB", "network": "100 Mbps", "price": "€ 19.99", "type": "ks" ,"link":"https://www.kimsufi.com/en/order/kimsufi.xml?reference="},
	{ "id": "1804sk23", "title": "KS-12(法国)", "cpu": "Intel Xeon W3520", "ram": "32 GB", "disk": "2x2TB", "network": "100 Mbps", "price": "€ 24.99", "type": "ks" ,"link":"https://www.kimsufi.com/en/order/kimsufi.xml?reference="},
	
    { "id": "1804sk12", "title": "KS-1(加拿大)", "cpu": "Atom™ D425", "ram": "2 GB", "disk": "500 GB", "network": "100 Mbps", "price": "€ 3.99", "type": "ks" ,"link":"https://www.kimsufi.com/en/order/kimsufi.xml?reference="},
    { "id": "1804sk13", "title": "KS-2(加拿大)", "cpu": "Atom™ N2800", "ram": "4 GB", "disk": "1 TB", "network": "100 Mbps", "price": "€ 4.99", "type": "ks" ,"link":"https://www.kimsufi.com/en/order/kimsufi.xml?reference="},
    { "id": "1804sk14", "title": "KS-3(加拿大)", "cpu": "Atom™ N2800", "ram": "4 GB", "disk": "2 TB", "network": "100 Mbps", "price": "€ 7.99", "type": "ks" ,"link":"https://www.kimsufi.com/en/order/kimsufi.xml?reference="},
    { "id": "1804sk15", "title": "KS-4(加拿大)", "cpu": "Atom™ N2800", "ram": "4 GB", "disk": "SoftRaid 2x2TB", "network": "100 Mbps", "price": "€ 13.99", "type": "ks" ,"link":"https://www.kimsufi.com/en/order/kimsufi.xml?reference="},
    { "id": "1804sk16", "title": "KS-5(加拿大)", "cpu": "AMD Opteron 4122", "ram": "16 GB", "disk": "2 TB", "network": "100 Mbps", "price": "€ 13.99", "type": "ks" ,"link":"https://www.kimsufi.com/en/order/kimsufi.xml?reference="},
    { "id": "1804sk17", "title": "KS-6(加拿大)", "cpu": "Intel i5-750", "ram": "16 GB", "disk": "2 TB", "network": "100 Mbps", "price": "€ 14.99", "type": "ks" ,"link":"https://www.kimsufi.com/en/order/kimsufi.xml?reference="},
    { "id": "1804sk18", "title": "KS-7(加拿大)", "cpu": "Intel i3-2130", "ram": "8 GB", "disk": "2 TB", "network": "100 Mbps", "price": "€ 14.99", "type": "ks" ,"link":"https://www.kimsufi.com/en/order/kimsufi.xml?reference="},
    { "id": "1804sk19", "title": "KS-8(加拿大)", "cpu": "Intel i7-920", "ram": "16 GB", "disk": "2 TB", "network": "100 Mbps", "price": "€ 15.99", "type": "ks" ,"link":"https://www.kimsufi.com/en/order/kimsufi.xml?reference="},
    { "id": "1804sk20", "title": "KS-9(加拿大)", "cpu": "Intel Xeon W3520", "ram": "16 GB", "disk": "240GB SSD", "network": "100 Mbps", "price": "€ 16.99", "type": "ks" ,"link":"https://www.kimsufi.com/en/order/kimsufi.xml?reference="},
	{ "id": "1804sk21", "title": "KS-10(加拿大)", "cpu": "Core™ i5-2300", "ram": "16 GB", "disk": "2TB", "network": "100 Mbps", "price": "€ 18.99", "type": "ks" ,"link":"https://www.kimsufi.com/en/order/kimsufi.xml?reference="},
	{ "id": "1804sk22", "title": "KS-11(加拿大)", "cpu": "Intel Xeon W3520", "ram": "16 GB", "disk": "2x2TB", "network": "100 Mbps", "price": "€ 19.99", "type": "ks" ,"link":"https://www.kimsufi.com/en/order/kimsufi.xml?reference="},
	{ "id": "1804sk23", "title": "KS-12(加拿大)", "cpu": "Intel Xeon W3520", "ram": "32 GB", "disk": "2x2TB", "network": "100 Mbps", "price": "€ 24.99", "type": "ks" ,"link":"https://www.kimsufi.com/en/order/kimsufi.xml?reference="},

    { "id": "1801armada01", "title": "ARM-2T(法国)", "cpu": "ARM Cortex A9 ARMv7", "ram": "2GB", "disk": "1x2TB ", "network": "250 Mbps", "price": "$ 5.99", "type": "sys" ,"link":"https://www.soyoustart.com/ie/order/soYouStart.xml?reference="},
    { "id": "1801armada02", "title": "ARM-4T(法国)", "cpu": "ARM Cortex A9 ARMv7", "ram": "2GB", "disk": "1x4TB ", "network": "250 Mbps", "price": "$ 5.99", "type": "sys" ,"link":"https://www.soyoustart.com/ie/order/soYouStart.xml?reference="},
	{ "id": "1801armada03", "title": "ARM-6T(法国)", "cpu": "ARM Cortex A9 ARMv7", "ram": "2GB", "disk": "1x2TB ", "network": "250 Mbps", "price": "$ 5.99", "type": "sys" ,"link":"https://www.soyoustart.com/ie/order/soYouStart.xml?reference="},
	{ "id": "1804armada01", "title": "ARM-2T(加拿大)", "cpu": "ARM Cortex A9 ARMv7", "ram": "2GB", "disk": "1x2TB ", "network": "250 Mbps", "price": "$ 5.99", "type": "sys" ,"link":"https://www.soyoustart.com/ie/order/soYouStart.xml?reference="},
    { "id": "1804armada02", "title": "ARM-4T(加拿大)", "cpu": "ARM Cortex A9 ARMv7", "ram": "2GB", "disk": "1x4TB ", "network": "250 Mbps", "price": "$ 5.99", "type": "sys" ,"link":"https://www.soyoustart.com/ie/order/soYouStart.xml?reference="},
	{ "id": "1804armada03", "title": "ARM-6T(加拿大)", "cpu": "ARM Cortex A9 ARMv7", "ram": "2GB", "disk": "1x2TB ", "network": "250 Mbps", "price": "$ 5.99", "type": "sys" ,"link":"https://www.soyoustart.com/ie/order/soYouStart.xml?reference="},

     { "id": "start-2-xs-sata", "title": "online_5o_HDD", "cpu": "Intel C2350", "ram": "4GB", "disk": "500GB ", "network": "1G Mbps", "price": "$ 4.99", "type": "ol" ,"link":"https://www.online.net/fr/serveurs-dedies/"},
    { "id": "start-2-s-ssd", "title": "online_12o_SSD", "cpu": "Intel C2350", "ram": "4GB", "disk": "120GB SSD", "network": "1G Mbps", "price": "$ 11.99", "type": "ol" ,"link":"https://www.online.net/fr/serveurs-dedies/"},
    { "id": "start-2-s-sata", "title": "online_12o_HDD", "cpu": "Intel C2350", "ram": "4GB", "disk": "1x1TB ", "network": "1G Mbps", "price": "$ 11.99", "type": "ol" ,"link":"https://www.online.net/fr/serveurs-dedies/"},


    ];

    var filters = {
        //本地接口
        'local': function(id, type, link, callback) {
            // console.log(link);
            var baseurl="http://127.0.0.1:8001"
            var url = baseurl+"/check_servers/"
            var postdata={"id":id,"type":type,"link":link}
            console.log(postdata)
            $.ajax({
                type: "POST",
                url: url,
				data: JSON.stringify(postdata),
                success: function(resp) {
                    callback && callback(resp.status=='true')
                },
                error: function() {
                    callback && callback(false);
                }
            })
        }
    }

    var utils = {
        s2t: function(v) {
            v = Math.floor(v / 1000);
            var h = utils.zero(Math.floor(v / 3600)),
                m = utils.zero(Math.floor((v - h * 3600) / 60)),
                s = utils.zero(v % 60);
            return [h, m, s].join(":");
        },
        zero: function(v) {
            return (v < 10 ? "0" : "") + v
        },
        copy: function(v) {
            var obj = {}
            for (var i in v) {
                obj[i] = v[i];
            }
            return obj;
        }

    }

    function kimsufi() {
        this.handlers = {};
        this.models = [];
        this.tick = 5000;
        this.process();
        this.filter = filters['default'];
        this.models_hash = {};
        for (var i = 0, l = models.length; i < l; i++) {
            this.models_hash[models[i].id] = models[i];
        }
    }

    kimsufi.prototype.add = function(m) {
        if (typeof(m) == 'string') m = [m];

        for (var i = 0, l = m.length; i < l; i++) {
            if (this.find(m[i])) {
                alert('已存在');
            } else {
                var hit = this.models_hash[m[i]];
                if (hit) {
                    var model = {
                        "id": hit.id,
                        "data": hit,
                        "status": 'loading',
                        "status_str": 'loading',
                        "start_time": new Date().getTime(),
                        "last_time": new Date().getTime(),
                        "type": hit.type,
                        "link":hit.link,
                        "timer": null
                    }

                    this.models.push(model);
                    this.check(model.id);
                    this.fire('add', model);
                }
            }

        }

        return this;
    }

    kimsufi.prototype.remove = function(id) {
        var index = this.find(id, true);
        if (index != -1) {
            var model = this.models[index];
            if (model.timer) window.clearTimeout(model.timer);
            this.models.splice(index, 1);
            this.fire('remove', utils.copy(model));
        }

    }

    kimsufi.prototype.find = function(id, index) {
        for (var i = 0, l = this.models.length; i < l; i++) {
            if (this.models[i].id == id) {
                return index ? i : this.models[i];
            }
        }
        return index ? -1 : null;
    }

    kimsufi.prototype.process = function() {
        var local = this;
        if (this.models) {
            this.fire('update', this.getStatus());
        }

        window.setTimeout(function() {
            local.process();
        }, 1000);
    }

    kimsufi.prototype.check = function(id , type,link) {
        var local = this;

        if (this.filter) {
            this.filter(id , type, link, function(status) {
                local.setStatus(id, status);
            })
        }

    }

    kimsufi.prototype.getStatus = function(id) {
        var models = id ? [this.find(id)] : this.models;
        for (var i = 0, l = models.length; i < l; i++) {
            models[i].uptime = Math.round((new Date().getTime() - models[i].last_time) / 1000);
            models[i].status_str = models[i].status == 'loading' ? 'loading' : (models[i].status ? '有货' : '缺货');

        }

        return this.models;
    }

    kimsufi.prototype.setStatus = function(id, status) {
        var model = this.find(id),
            local = this;
        if (model) {
            var last_status = model.status;
            var type = model.type;
            var link = model.link;
            model.status = status;
            model.last_time = new Date().getTime();
            model.timer = setTimeout(function() {
                local.check(id , type,link);
            }, this.tick);
            this.fire('update', this.getStatus());

            if (model.status /* && last_status !== true*/ ) {
                this.fire('hit', model);
            }
        }
    }

    kimsufi.prototype.setFilter = function(f) {
        if (typeof(f) == 'string' && filters[f]) {
            this.filter = filters[f];
        } else if (typeof(f) == 'function') {
            this.filter = f;
        }
        return this;
    }

    kimsufi.prototype.setTick = function(v) {
        this.tick = parseInt(v);
    }

    kimsufi.prototype.getModels = function() {
        var ret = [];
        for (var i = 0; i < this.models.length; i++) {
            ret.push(this.models[i].id);
        }
        return ret;
    }

    kimsufi.prototype.on = function(evt, callback) {
        if (!this.handlers[evt]) this.handlers[evt] = [];
        this.handlers[evt].push(callback);
        return this;
    }

    kimsufi.prototype.fire = function(evt, data) {
        if (this.handlers[evt]) {
            var handlers = this.handlers[evt];

            for (var i = 0; i < handlers.length; i++) {
                handlers[i].call(this, data);
            }

        }
    }

    root.kimsufi = function() {
        return new kimsufi();
    }

    root.kimsufi.models = models;

    root.kimsufi.getOrderUrl = function(id) {
        return 'https://www.kimsufi.com/en/order/kimsufi.cgi?hard=' + id;
    }

    //用于注册第三方检测方式
    root.kimsufi.register = function(name, filter) {
        if (name && name != 'default' && name != 'local' && name != 'api') {
            filters[name] = filter;
        }
    }
}(jQuery, this));