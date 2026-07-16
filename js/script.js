$(function() {
  // サムネールをクリックしたときの処理
  $("a").click(function() {
    // body要素の末尾にdiv#bgとdiv#photoを追加
    $("body")
      .append('<div id="bg">')
      .append('<div id="photo">');

      // それぞれ非表示にする
      $("#bg, #photo").hide();

      // #photoの中にimg要素を追加
      $("#photo").html("<img>");

      // img要素にsrc属性とalt属性を設定
      $("#photo img")
        .attr("src", $(this).attr("href"))
        .attr("alt", "Photo");

      // #bgと#photoをフェードイン
      $("#bg, #photo").fadeIn(800); // 時間調整（ミリ秒）

      // 背景をクリック
      $("#bg").click(function() {
        // 背景（自分自身）をフェードアウトと、完了後の処理
        $(this).fadeOut(function() {
          $(this).remove(); // #bgを削除
        });

        // #photoもフェードアウトと、完了後の処理
        $("#photo").fadeOut(function() {
          $(this).remove(); // #photoを削除
        });
      });

    return false; // デフォルトのリンク動作を無効化
  });
});