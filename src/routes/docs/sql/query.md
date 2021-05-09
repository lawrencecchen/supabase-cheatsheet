<!--

https://docs.fauna.com/fauna/current/start/fql_for_sql_users.html?lang=javascript#query
https://postgrescheatsheet.com/#/constraints
https://learnsql.com/blog/sql-basics-cheat-sheet/
https://supabase.io/blog/2021/02/27/cracking-postgres-interview

 -->

# Query

<div class="grid md:grid-cols-2 gap-4">

<div>

### SQL: Select All From Posts

```sql
 select * from posts;
```

</div>

<div>

### JavaScript

```js
const { data, error } = await supabase.from('posts').select();
```

</div>

</div>
