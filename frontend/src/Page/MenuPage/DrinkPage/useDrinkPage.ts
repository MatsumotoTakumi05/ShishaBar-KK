import { useEffect, useState } from "react";

export function useDrinkPage() {
  const allList = [
    {
      id: "beer",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "生ビール",
      textContent: "¥ 700",
    },
    {
      id: "beer",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "シャンディガフ",
      textContent: "¥ 800",
    },
    {
      id: "beer",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "ハイボール",
      textContent: "¥ 800",
    },
    {
      id: "beer",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "コークハイボール",
      textContent: "¥ 800",
    },
    {
      id: "beer",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "ジンジャーハイボール",
      textContent: "¥ 800",
    },
    // ワイン
    {
      id: "wine",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "赤ワイン",
      textContent: "¥ 800",
    },
    {
      id: "wine",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "白ワイン",
      textContent: "¥ 800",
    },
    {
      id: "",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "キティ",
      textContent: "¥ 800",
    },
    {
      id: "wine",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "オペレーター",
      textContent: "¥ 800",
    },
    // サワー
    {
      id: "sour",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "レモンサワー",
      textContent: "¥ 700",
    },
    {
      id: "sour",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "巨峰サワー",
      textContent: "¥ 700",
    },
    {
      id: "sour",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "カルピスサワー",
      textContent: "¥ 700",
    },
    {
      id: "sour",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "ライムサワー",
      textContent: "¥ 700",
    },
    // 焼酎・梅酒
    {
      id: "syochu",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "黒霧島（芋焼酎）",
      textContent: "¥ 700",
    },
    {
      id: "syochu",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "二階堂（麦焼酎）",
      textContent: "¥ 700",
    },
    {
      id: "syochu",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "しろ（米焼酎）",
      textContent: "¥ 700",
    },
    {
      id: "syochu",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "梅酒（ロック/ソーダ割）",
      textContent: "¥ 700",
    },
    // カクテル
    {
      id: "cocktail1",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "カシスウーロン",
      textContent: "¥ 700",
    },
    {
      id: "cocktail1",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "カシスソーダ",
      textContent: "¥ 700",
    },
    {
      id: "cocktail1",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "カシスオレンジ",
      textContent: "¥ 700",
    },
    {
      id: "cocktail1",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "マリブコーク",
      textContent: "¥ 700",
    },
    {
      id: "cocktail1",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "マリブミルク",
      textContent: "¥ 700",
    },
    {
      id: "cocktail1",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "カルアミルク",
      textContent: "¥ 700",
    },
    {
      id: "cocktail1",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "ライチグレープ",
      textContent: "¥ 700",
    },
    {
      id: "cocktail1",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "ライチトニック",
      textContent: "¥ 700",
    },
    {
      id: "cocktail1",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "ライチソーダ",
      textContent: "¥ 700",
    },
    {
      id: "cocktail1",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "チャイナブルー",
      textContent: "¥ 700",
    },
    {
      id: "cocktail2",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "ファジーネーブルー",
      textContent: "¥ 700",
    },
    {
      id: "cocktail2",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "ピーチウーロン",
      textContent: "¥ 700",
    },
    {
      id: "cocktail2",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "ジントニック",
      textContent: "¥ 700",
    },
    {
      id: "cocktail2",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "ジンバック",
      textContent: "¥ 700",
    },
    {
      id: "cocktail2",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "ラムトニック",
      textContent: "¥ 700",
    },
    {
      id: "cocktail2",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "ラムバック",
      textContent: "¥ 700",
    },
    {
      id: "cocktail2",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "モスコミュール",
      textContent: "¥ 700",
    },
    {
      id: "cocktail2",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "スクリュードライバー",
      textContent: "¥ 700",
    },
    {
      id: "cocktail2",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "マンゴーソーダ",
      textContent: "¥ 700",
    },
    {
      id: "cocktail2",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "マンゴーミルク",
      textContent: "¥ 700",
    },

    // ショット
    {
      outHeight: "330px",
      textHeight: "130px",
      id: "shot",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "テキーラ",
      textContent: "1shot : ¥ 500<br />3shot : ¥ 1,200",
    },
    {
      outHeight: "330px",
      textHeight: "130px",
      id: "shot",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "イェーガー",
      textContent: "1shot : ¥ 500<br />3shot : ¥ 1,200",
    },
    {
      outHeight: "330px",
      textHeight: "130px",
      id: "shot",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "コカレロ",
      textContent: "1shot : ¥ 600<br />3shot : ¥ 1,600",
    },
    {
      outHeight: "330px",
      textHeight: "130px",
      id: "shot",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "コカボム",
      textContent: "1shot : ¥ 800<br />3shot : ¥ 2,000",
    },
    {
      id: "shot",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "クライナー",
      textContent: "¥ 800",
    },
    {
      id: "shot",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "チャミスル",
      textContent: "¥ 1,200",
    },
    // シャンパン
    {
      id: "shot",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "スパークリングワイン",
      textContent: "¥ 5,500",
    },
    {
      id: "shot",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "カフェパリ",
      textContent: "¥ 6,000",
    },
    {
      id: "shot",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "マバム",
      textContent: "¥ 14,000",
    },
    {
      id: "shot",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "モエ アイス",
      textContent: "¥ 23,000",
    },
    {
      id: "shot",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "モエ ネクター",
      textContent: "¥ 30,000",
    }, // ノンアル
    {
      id: "nonal",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "ノンアル梅酒",
      textContent: "¥ 500",
    },
    {
      id: "nonal",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "カシスオレンジ",
      textContent: "¥ 500",
    },
    {
      id: "nonal",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "カシスソーダ",
      textContent: "¥ 500",
    },
    {
      id: "nonal",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "カシスウーロン",
      textContent: "¥ 500",
    },
    {
      id: "nonal",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "サラトガクーラー",
      textContent: "¥ 500",
    },
    {
      id: "nonal",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "ファジーネーブル",
      textContent: "¥ 500",
    },
    {
      id: "nonal",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "シャリーテンプル",
      textContent: "¥ 500",
    },
    // ソフトドリンク
    {
      id: "nonal",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "緑茶",
      textContent: "¥ 500",
    },
    {
      id: "nonal",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "烏龍茶",
      textContent: "¥ 500",
    },
    {
      id: "nonal",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "オレンジ",
      textContent: "¥ 500",
    },
    {
      id: "nonal",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "カルピス",
      textContent: "¥ 500",
    },
    {
      id: "nonal",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "コーラ",
      textContent: "¥ 500",
    },
    {
      id: "nonal",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
      textTittle: "ジンジャエール",
      textContent: "¥ 500",
    },
    {
      id: "nonal",
      imgUrl: "/Drink.jpeg",
      imgEx: "./Drink",
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
      case "cocktail2List":
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
