# Common `psql` commands

Comprehensive documentation can be found by typing `help` inside the `psql` shell.

## List databases

```
\l
```

## Connect to database (default)

```
\dt postgres
```

## List schemas

```
\dn
```

## List tables, views, and sequences

```
\d
```

## List tables

```
\dt
```

## List views

```
\dv
```

## Show view definition

```
\sv [my_view]
```

## List functions

```
\df
```

List functions in the public schema:

```
\df public.*
```

## Show function definition

```
\sf [my_function]
```

## Edit function

```
\ef [my_function]
```

## List indices

```
\di
```

## List roles

```
\dg
```

## List extensions

```
\dx
```
