\echo 'Delete and recreate splitsystems db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE splitsystems;
CREATE DATABASE splitsystems;
\connect splitsystems

\i splitsystems-schema.sql
\i splitsystems-seed.sql

\echo 'Delete and recreate splitsystems_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE splitsystems_test;
CREATE DATABASE splitsystems_test;
\connect splitsystems_test

\i splitsystems-schema.sql
