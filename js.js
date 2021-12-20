var _global;
var country;
//request for global json
$(document).ready(function () {
  $.ajax({
    url: "https://api.covid19api.com/summary",
    success: function (data) {
      _global = data;
      $("#gc").html(
        "Total number of confirmed cases: " +
          _global.Global.TotalConfirmed.toLocaleString()
      );
      $("#gd").html(
        "Total number of deaths: " + _global.Global.TotalDeaths.toLocaleString()
      );
      $("#gr").html(
        "Total number of recovered: " +
          _global.Global.TotalRecovered.toLocaleString()
      );
      for (var i = 0; i < 252; i++) {
        country = _global.Countries[i].Country.toString();
        var slug = _global.Countries[i].Slug.toString();
        $("select").append(new Option(country, slug));
      }
    },
    error: function () {
      alert("please turn on your data and refresh:-)");
    },
  });

  $("select").on("change", function () {
    var selected = this.value;
    for (var i = 0; i <= 256; i++) {
      if (_global.Countries[i].Slug == selected) {
        $("#cfrm").html(
          "Total number of confirmed cases: " +
            _global.Countries[i].TotalConfirmed.toLocaleString()
        );
        $("#dth").html(
          "Total number of deaths: " +
            _global.Countries[i].TotalDeaths.toLocaleString()
        );
        $("#rcvry").html(
          "Total number of recovered: " +
            _global.Countries[i].TotalRecovered.toLocaleString()
        );
        break;
      }
    }
  });
});
