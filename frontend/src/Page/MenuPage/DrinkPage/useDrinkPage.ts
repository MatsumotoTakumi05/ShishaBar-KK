import { useEffect, useState } from "react";

export function useDrinkPage() {
  const allList = [
    {
      id: "beer",
      imgUrl: "/BeerCard.jpg",
      imgEx: "./BeerCard",
      textTittle: "生ビール",
      textContent: "¥ 700",
    },
    {
      id: "beer",
      imgUrl: "/ShandyGuh.jpg",
      imgEx: "./ShandyGuh",
      textTittle: "シャンディガフ",
      textContent: "¥ 800",
    },
    {
      id: "beer",
      imgUrl: "/HightBallCard.jpg",
      imgEx: "./HightBall",
      textTittle: "ハイボール",
      textContent: "¥ 800",
    },
    {
      id: "beer",
      imgUrl: "/CokeHightBallCard.jpg",
      imgEx: "./CokeHightBallCard",
      textTittle: "コークハイボール",
      textContent: "¥ 800",
    },
    {
      id: "beer",
      imgUrl: "/GingerHightBall.jpg",
      imgEx: "./GingerHightBall",
      textTittle: "ジンジャーハイボール",
      textContent: "¥ 800",
    },
    // ワイン
    {
      id: "wine",
      imgUrl: "/RedWine.jpg",
      imgEx: "./RedWine",
      textTittle: "赤ワイン",
      textContent: "¥ 800",
    },
    {
      id: "wine",
      imgUrl: "/WhiteWineCard.jpg",
      imgEx: "./WhiteWineCard",
      textTittle: "白ワイン",
      textContent: "¥ 800",
    },
    {
      id: "wine",
      imgUrl: "/KityCard.jpg",
      imgEx: "./KityCard",
      textTittle: "キティ",
      textContent: "¥ 800",
    },
    {
      id: "wine",
      imgUrl: "/OperaterCard.jpg",
      imgEx: "./OperaterCard",
      textTittle: "オペレーター",
      textContent: "¥ 800",
    },
    // サワー
    {
      id: "sour",
      imgUrl: "/LemonSourCard.jpg",
      imgEx: "./LemonSourCard",
      textTittle: "レモンサワー",
      textContent: "¥ 700",
    },
    {
      id: "sour",
      imgUrl: "/GreapSourCard.jpg",
      imgEx: "./GreapSourCard",
      textTittle: "巨峰サワー",
      textContent: "¥ 700",
    },
    {
      id: "sour",
      imgUrl: "/calpisCard.jpg",
      imgEx: "./calpisCard.jpg",
      textTittle: "カルピスサワー",
      textContent: "¥ 700",
    },
    {
      id: "sour",
      imgUrl: "/LimeSourCard.jpg",
      imgEx: "./LimeSourCard",
      textTittle: "ライムサワー",
      textContent: "¥ 700",
    },
    // 焼酎・梅酒
    {
      id: "syochu",
      imgUrl: "/ShochuCard.jpg",
      imgEx: "./ShochuCard",
      textTittle: "黒霧島（芋焼酎）",
      textContent: "¥ 700",
    },
    {
      id: "syochu",
      imgUrl: "/ShochuCard.jpg",
      imgEx: "./ShochuCard",
      textTittle: "二階堂（麦焼酎）",
      textContent: "¥ 700",
    },
    {
      id: "syochu",
      imgUrl: "/ShochuCard.jpg",
      imgEx: "./ShochuCard",
      textTittle: "しろ（米焼酎）",
      textContent: "¥ 700",
    },
    {
      id: "syochu",
      imgUrl: "/UmesyuCard.jpg",
      imgEx: "./UmesyuCard.jpg",
      textTittle: "梅酒（ロック/ソーダ割）",
      textContent: "¥ 700",
    },
    // カクテル
    {
      id: "cocktail1",
      imgUrl: "/CasisUronCard.jpg",
      imgEx: "./CasisUronCard",
      textTittle: "カシスウーロン",
      textContent: "¥ 700",
    },
    {
      id: "cocktail1",
      imgUrl: "/CasisUronCard.jpg",
      imgEx: "./CasisSodaCard",
      textTittle: "カシスソーダ",
      textContent: "¥ 700",
    },
    {
      id: "cocktail1",
      imgUrl: "/CasisOrange.jpg",
      imgEx: "./CasisOrange",
      textTittle: "カシスオレンジ",
      textContent: "¥ 700",
    },
    {
      id: "cocktail1",
      imgUrl: "/MaribCokeCard.jpg",
      imgEx: "./MaribCokeCard",
      textTittle: "マリブコーク",
      textContent: "¥ 700",
    },
    {
      id: "cocktail1",
      imgUrl: "/MaribMilkCard.jpg",
      imgEx: "./MaribMilkCard",
      textTittle: "マリブミルク",
      textContent: "¥ 700",
    },
    {
      id: "cocktail1",
      imgUrl: "/KaruaMilkCard.jpg",
      imgEx: "./KaruaMilkCard",
      textTittle: "カルアミルク",
      textContent: "¥ 700",
    },
    {
      id: "cocktail1",
      imgUrl: "/RaichiGreapCard.jpg",
      imgEx: "./RaichiGreapCard",
      textTittle: "ライチグレープ",
      textContent: "¥ 700",
    },
    {
      id: "cocktail1",
      imgUrl: "/RaichiTonickCard.jpg",
      imgEx: "./RaichiTonickCard",
      textTittle: "ライチトニック",
      textContent: "¥ 700",
    },
    {
      id: "cocktail1",
      imgUrl: "/RaichiSodaCard.jpg",
      imgEx: "./RaichiSodaCard",
      textTittle: "ライチソーダ",
      textContent: "¥ 700",
    },
    {
      id: "cocktail1",
      imgUrl: "/ChinaBlueCard.jpg",
      imgEx: "./ChinaBlueCard",
      textTittle: "チャイナブルー",
      textContent: "¥ 700",
    },
    {
      id: "cocktail2",
      imgUrl: "/HuginableCard.jpg",
      imgEx: "./HuginableCard.jpg",
      textTittle: "ファジーネーブルー",
      textContent: "¥ 700",
    },
    {
      id: "cocktail2",
      imgUrl: "/PeachUronCard.jpg",
      imgEx: "./PeachUronCard",
      textTittle: "ピーチウーロン",
      textContent: "¥ 700",
    },
    {
      id: "cocktail2",
      imgUrl: "/JinTonickCard.jpg",
      imgEx: "./JinTonickCard",
      textTittle: "ジントニック",
      textContent: "¥ 700",
    },
    {
      id: "cocktail2",
      imgUrl: "/JinBackCard.jpg",
      imgEx: "./JinBackCard",
      textTittle: "ジンバック",
      textContent: "¥ 700",
    },
    {
      id: "cocktail2",
      imgUrl: "/RamTonikCard.jpg",
      imgEx: "./RamTonikCard",
      textTittle: "ラムトニック",
      textContent: "¥ 700",
    },
    {
      id: "cocktail2",
      imgUrl: "/RamBackCard.jpg",
      imgEx: "./RamBackCard",
      textTittle: "ラムバック",
      textContent: "¥ 700",
    },
    {
      id: "cocktail2",
      imgUrl: "/MoscowMuleCard.jpg",
      imgEx: "./MoscowMuleCard",
      textTittle: "モスコミュール",
      textContent: "¥ 700",
    },
    {
      id: "cocktail2",
      imgUrl: "/MoscowMuleCard.jpg",
      imgEx: "./MoscowMuleCard",
      textTittle: "スクリュードライバー",
      textContent: "¥ 700",
    },
    {
      id: "cocktail2",
      imgUrl: "/MangoSodaCard.jpg",
      imgEx: "./MangoSodaCard",
      textTittle: "マンゴーソーダ",
      textContent: "¥ 700",
    },
    {
      id: "cocktail2",
      imgUrl: "/MangoMilkCard.jpg",
      imgEx: "./MangoMilkCard",
      textTittle: "マンゴーミルク",
      textContent: "¥ 700",
    },

    // ショット
    {
      outHeight: "330px",
      textHeight: "130px",
      id: "shot",
      imgUrl: "/ShotCard.jpg",
      imgEx: "./ShotCard",
      textTittle: "テキーラ",
      textContent: "1shot : ¥ 500<br />3shot : ¥ 1,200",
    },
    {
      outHeight: "330px",
      textHeight: "130px",
      id: "shot",
      imgUrl: "/ShotCard.jpg",
      imgEx: "./ShotCard",
      textTittle: "イェーガー",
      textContent: "1shot : ¥ 500<br />3shot : ¥ 1,200",
    },
    {
      outHeight: "330px",
      textHeight: "130px",
      id: "shot",
      imgUrl: "/ShotCard.jpg",
      imgEx: "./ShotCard",
      textTittle: "コカレロ",
      textContent: "1shot : ¥ 600<br />3shot : ¥ 1,600",
    },
    {
      outHeight: "330px",
      textHeight: "130px",
      id: "shot",
      imgUrl: "/ShotCard.jpg",
      imgEx: "./ShotCard",
      textTittle: "コカボム",
      textContent: "1shot : ¥ 800<br />3shot : ¥ 2,000",
    },
    {
      id: "shot",
      imgUrl: "/ShotCard.jpg",
      imgEx: "./ShotCard",
      textTittle: "クライナー",
      textContent: "¥ 800",
    },
    {
      id: "shot",
      imgUrl: "/ShotCard.jpg",
      imgEx: "./ShotCard",
      textTittle: "チャミスル",
      textContent: "¥ 1,200",
    },
    // シャンパン
    {
      id: "shot",
      imgUrl: "/ChampagneCard.jpg",
      imgEx: "./ChampagneCard",
      textTittle: "スパークリングワイン",
      textContent: "¥ 5,500",
    },
    {
      id: "shot",
      imgUrl: "/ChampagneCard.jpg",
      imgEx: "./ChampagneCard",
      textTittle: "カフェパリ",
      textContent: "¥ 6,000",
    },
    {
      id: "shot",
      imgUrl: "/ChampagneCard.jpg",
      imgEx: "./ChampagneCard",
      textTittle: "マバム",
      textContent: "¥ 14,000",
    },
    {
      id: "shot",
      imgUrl: "/ChampagneCard.jpg",
      imgEx: "./ChampagneCard",
      textTittle: "モエ アイス",
      textContent: "¥ 23,000",
    },
    {
      id: "shot",
      imgUrl: "/ChampagneCard.jpg",
      imgEx: "./ChampagneCard",
      textTittle: "モエ ネクター",
      textContent: "¥ 30,000",
    }, // ノンアル
    {
      id: "nonal",
      imgUrl: "/NonalUmesyuCard.jpg",
      imgEx: "./NonalUmesyuCard",
      textTittle: "ノンアル梅酒",
      textContent: "¥ 500",
    },
    {
      id: "nonal",
      imgUrl: "/CasisOrange.jpg",
      imgEx: "./CasisOrange",
      textTittle: "カシスオレンジ",
      textContent: "¥ 500",
    },
    {
      id: "nonal",
      imgUrl: "/CasisUronCard.jpg",
      imgEx: "./CasisSodaCard",
      textTittle: "カシスソーダ",
      textContent: "¥ 500",
    },
    {
      id: "nonal",
      imgUrl: "/CasisUronCard.jpg",
      imgEx: "./CasisUronCard",
      textTittle: "カシスウーロン",
      textContent: "¥ 500",
    },
    {
      id: "nonal",
      imgUrl: "/SakuraTogerCard.jpg",
      imgEx: "./SakuraTogerCard",
      textTittle: "サラトガクーラー",
      textContent: "¥ 500",
    },
    {
      id: "nonal",
      imgUrl: "/HuginableCard.jpg",
      imgEx: "./HuginableCard.jpg",
      textTittle: "ファジーネーブル",
      textContent: "¥ 500",
    },
    {
      id: "nonal",
      imgUrl: "/ShanryTempleCard.jpg",
      imgEx: "./DriShanryTempleCardnk",
      textTittle: "シャリーテンプル",
      textContent: "¥ 500",
    },
    // ソフトドリンク
    {
      id: "nonal",
      imgUrl: "/RyokuchaCard.jpg",
      imgEx: "./RyokuchaCard",
      textTittle: "緑茶",
      textContent: "¥ 500",
    },
    {
      id: "nonal",
      imgUrl: "/UronchaCard.jpg",
      imgEx: "./UronchaCard",
      textTittle: "烏龍茶",
      textContent: "¥ 500",
    },
    {
      id: "nonal",
      imgUrl: "/OrangeJuceCard.jpg",
      imgEx: "./OrangeJuceCard",
      textTittle: "オレンジ",
      textContent: "¥ 500",
    },
    {
      id: "nonal",
      imgUrl: "/KalpisJuceCard.jpg",
      imgEx: "./KalpisJuceCard",
      textTittle: "カルピス",
      textContent: "¥ 500",
    },
    {
      id: "nonal",
      imgUrl: "/CokeJuceCard.jpg",
      imgEx: "./CokeJuceCard",
      textTittle: "コーラ",
      textContent: "¥ 500",
    },
    {
      id: "nonal",
      imgUrl: "/GingerJuceCard.jpg",
      imgEx: "./GingerJuceCard",
      textTittle: "ジンジャエール",
      textContent: "¥ 500",
    },
    {
      id: "nonal",
      imgUrl: "/SodaCard.jpg",
      imgEx: "./SodaCard",
      textTittle: "炭酸水",
      textContent: "¥ 500",
    },
  ];

  const [cardList, setCardList] = useState<any>(allList);

  // 各ドリンク区分のリスト
  const beerList = allList.filter((beer: any) => beer["id"] === "beer");
  const wineList = allList.filter((wine: any) => wine["id"] === "wine");
  const sourList = allList.filter((sour: any) => sour["id"] === "sour");
  const syochuList = allList.filter((syochu: any) => syochu["id"] === "syochu");
  const cocktail1List = allList.filter(
    (cocktail1: any) => cocktail1["id"] === "cocktail1"
  );
  const cocktail2List = allList.filter(
    (cocktail2: any) => cocktail2["id"] === "cocktail2"
  );
  const shotList = allList.filter((shot: any) => shot["id"] === "shot");
  const nonalList = allList.filter((nonal: any) => nonal["id"] === "nonal");

  const [alignment, setAlignment] = useState<string | null>("left");

  const handleAlignment = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setAlignment(val);
  };

  useEffect(() => {
    console.log(alignment);
    switch (alignment) {
      case "beer":
        setCardList(beerList);
        break;
      case "wine":
        setCardList(wineList);
        break;
      case "sour":
        setCardList(sourList);
        break;
      case "syochu":
        setCardList(syochuList);
        break;
      case "cocktail1":
        setCardList(cocktail1List);
        break;
      case "cocktail2":
        setCardList(cocktail2List);
        break;
      case "shot":
        setCardList(shotList);
        break;
      case "nonal":
        setCardList(nonalList);
        break;
    }
  }, [alignment]);
  return [alignment, handleAlignment, cardList];
}
