## 起動

docker-compose up

## 確認

docker-compose の stdout で下記のようなログが出力される。
内容は logstash からのリクエストボディ

```
http-server_1  | {
http-server_1  |   modification_time: '2021-07-19T13:35:29.000Z',
http-server_1  |   insertion_time: '2021-07-19T13:35:29.000Z',
http-server_1  |   name: 'huga',
http-server_1  |   '@timestamp': '2021-07-19T14:27:42.586Z'
http-server_1  | }
http-server_1  | {
http-server_1  |   modification_time: '2021-07-19T13:35:29.000Z',
http-server_1  |   insertion_time: '2021-07-19T13:35:29.000Z',
http-server_1  |   name: 'hoge',
http-server_1  |   '@timestamp': '2021-07-19T14:27:42.581Z'
http-server_1  | }
```
