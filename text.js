<script>

//曜日取得
var today = new Date();
var week  = today.getDay();

//曜日を入れる変数
var str;

//条件分岐
switch (week) {
      case 0: str="日"; break;
        case 1: str="月"; break;
          case 2: str="火"; break;
            case 3: str="水"; break;
              case 4: str="木"; break;
                case 5: str="金"; break;
                  default : str="土"; break;
}

document.write("今日は" + str + "曜日です。");
</script>
