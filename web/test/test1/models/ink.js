var dbpool = require('./dbpool.js');

let table = `create table if not exists ink(
             id int not null auto_increment,
             title varchar(100) not null unique,
             tag varchar(100) not null,
             createtime varchar(100) not null,
             updatetime varchar(100) not null,
             intro varchar(500) not null,
             content longtext not null,
             primary key ( id )
             ) default charset=utf8;`

dbpool(table,[]).then(function(){
        console.log("ink table is create!");
    })

let insert = function(value){
    let dbsql = "insert into ink set title=?,tag=?,createtime=?,updatetime=?,intro=?,content=?;"
    return dbpool(dbsql,value);
    }

let deleteid = function(id){
    let dbsql = `delete from ink where id="${id}";`
    return dbpool(dbsql,[]);
    }

let update = function(value){
    let dbsql = "update ink set title=?,tag=?,updatetime=?,intro=?,content=? where id=?;"
    return dbpool(dbsql,value);
    }

let findbar = function(id){
    let dbsql = `select * from ink where id="${id}";`
    return dbpool(dbsql,[]);
    }

let findall = function(order){
    let dbsql = `select * from ink order by "${order}" desc;`
    return dbpool(dbsql,[]);
    }

let findallpage = function(value){
    let dbsql = "select * from ink order by ? desc limit ?,?;"
    return dbpool(dbsql,value);
    }

let findtags = function(){
    let dbsql = "select distinct tag from ink;"
    return dbpool(dbsql,[])
    }

let findtagall = function(value){
    let dbsql = "select * from ink where tag=? order by ? desc;"
    return dbpool(dbsql,value);
    }

let findtagpage = function(value){ 
    let dbsql = "select * from ink where tag=? order by ? desc limit ?,?;"
    return dbpool(dbsql,value)
    }
    

module.exports = {
    insert,
    deleteid,
    update,
    findbar,
    findall,
    findallpage,
    findtags,
    findtagall,
    findtagpage
    }
