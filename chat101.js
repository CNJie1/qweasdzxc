
$.ajax({
    type: "POST",
    url: "/haichon/ashx/chat.ashx",
    data: { id: getid, url: window.location.href,st:"0" },
    success: function (data) {
        $("head").append(data);
    }
});

$.ajax({
    type: "POST",
    url: "/haichon/ashx/chat.ashx",
    data: { id: getid, url: window.location.href, st: "1" },
    success: function (data) {
        data = $.base64.atob(data, true)
        $("#wrapper").append(data);
        $(".example").imgbox({
            'speedIn': 100,
            'speedOut': 100,
            'alignment': 'center',
            'overlayShow': true,
            'allowMultiple': false
        });
    }
});




function sort_mdy()
{
    window.location.href = "/haichon/sort_mdy.aspx?id="+getid;
}
function list_mdy()
{
           
    window.location.href = "/haichon/content_mdy.aspx?type=add&sid="+getid;
}

if (localStorage.getItem(getid) == null) {
    localStorage.setItem(getid, JSON.stringify({"k":"1"}));//转换成json字符串序列
$.ajax({
    type: "POST",
    url: "/haichon/ashx/click.ashx",
    data: { id: getid, },
    success: function (data) {
    }
});
}