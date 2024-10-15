<!-- git clone https://github.com/MatsumotoTakumi05/ShishaBar-KK.git -->
git cloneを実行

<!-- node --version -->
  nodeがインストールされているか確認。インストールされていなければ公式にてインストール

<!-- cd frontend -->

<!-- npm ci -->
package.jsonを元にnode_modulesを生成

<!-- npm start -->
ローカル環境にてアプリを立ち上げる際のコマンド


<!-- package.json -->
^を削除することでバージョンのアップデートを行わない
"@emotion/react": "^11.13.3", -> "@emotion/react": "11.13.3",

<!-- ディレクトリ構造について -->
node_modules: インストールしたライブラリーの保管先
public:画像の保存先、コンパイルファイルの配置場所
src:アプリのソース管理ディレクトリ
　　- Component :共通のコンポーネントを配置（流用可能であること）
      - atoms:Buttonタグなどの部品コンポーネント
      - modules:atomsを複合して作成した中規模コンポーネント 
    - Page:各画面のコンポーネントを配置
    - Utils :共通の関数や定数を配置
App.tsx - 全コンポーネントをここに配置
