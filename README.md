## Docker-compose コマンド

docker-compose build
    Dockerfileよりイメージを生成する、Dockerfileに変更を反映させる場合は再ビルドする必要がある  
    オプションで「--no-cache」を付けると、前のキャッシュを使わずにビルドする  

docker-compose up -d  
    イメージよりコンテナを生成 & 起動、オプションで「-d」を付けることでバックグラウンドで実行  
    バックグラウンドで起動しないと、コンテナを終了するまでpoweshellで他のコマンドが入力できなくなる  
    オプションで「--build」を付けるとbuildも行う  

docker-compose ps  
    起動中のコンテナ一覧が表示される、状態確認に使う  

docker-compose exec サービス名 bash  
    コンテナの中に入る、サービス名は「docker-compose.yml」に記述した名前  

docker-compose run --rm サービス名 コマンド
    コンテナ内でコマンドの内容が実行される
    「--rm」を付けないとrunの度にコンテナが生成される

docker-compose down  
    イメージ、コンテナ、ボリューム、ネットワーク削除  

docker-compose stop  
    コンテナ停止  

docker-compose down --rmi all --volumes --remove-orphans  
    スーパー全削除  
    down前にdocker-compose.ymlファイルを編集した場合、以前のコンテナが残る。「--remove-orphans」はそれも削除する  

docker-compose logs サービス名  
    コンテナのログが表示される、サービスを付けない場合、全コンテナのログが表示  
    VSCodeのDockerの拡張機能をインストールすると、コンテナ右クリック→「View Logs」で見れる  
    「docker-compose logs -f サービス名」でリアルタイムにログが表示される(fはfollowの略)  


## Linux コマンド

grep -lr "test"  
    "test"が含まれるファイル名・ファイル内を検索
    ~ "test" /home とパス内の指定も可能
    パスを指定しないと現在位置からの検索となり、ルート検索だとかなり時間がかかる

find ./ -name "*.html"  
    ファイル名検索、-nameを付けるとワイルドカードが使える。