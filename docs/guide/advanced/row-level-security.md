# Row Level Security

## `SECURITY DEFINER` and `SECURITY INVOKER`

Functions can be created with either the `SECURITY DEFINER` or the `SECURITY INVOKER` attribute.

## `SECURITY INVOKER`

This is the default setting for functions. The function will be executed with the permissions of the user that called it.

## `SECURITY DEFINER`

This is the default setting for views. By default, the user that creates a function becomes the owner of the function.

**Currently, views can only be `SECURITY DEFINER`.** In PostgreSQL versions 15 (which has not yet been released), views can be set as `SECURITY INVOKER`, making row level security much more straightworward.

## Resources

- https://www.cybertec-postgresql.com/en/abusing-security-definer-functions/
- https://www.depesz.com/2022/03/22/waiting-for-postgresql-15-add-support-for-security-invoker-views/
- https://www.postgresql.org/message-id/b66dd6d6-ad3e-c6f2-8b90-47be773da240%40cybertec.at
- https://www.postgresql.org/docs/current/sql-createfunction.html
