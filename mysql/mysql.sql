SHOW DATABASES;
CREATE DATABASE simple_cms_development;
USE db_name;

GRANT ALL PRIVILEGES ON simple_cms_development.*
TO 'simple_cms'@'localhost'
IDENTIFIED BY 'popassword';

SHOW GRANTS FOR 'simple_cms'@'localhost';

-- log back in as user
mysql -u simple_cms -p simple_cms_development;

DROP DATABASE simple_cms_development;
