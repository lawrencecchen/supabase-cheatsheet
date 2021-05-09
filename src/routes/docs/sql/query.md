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
