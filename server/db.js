// 데이터베이스 연결하기
import mysql from 'mysql'
export const db = mysql.createConnection({
    host: 'reactproject.cafe24app.com',        // 카페24에서 생성한 앱의 도메인명
    user: 'puuding',               // 사용자 아이디
    password: 'serious119!!',              // DB 비밀번호
    database: 'puuding',           // 데이터베이스명(사용자 아이디와 같음)
})
db.connect()