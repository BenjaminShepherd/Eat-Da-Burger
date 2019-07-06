
USE burgers_db;

CREATE TABLE burgers
(
    id int NOT NULL
    auto_increment,
    burger_name VARCHAR
    (255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY
    (id)
);

    insert into burgers
        (burger_name, devoured)
    values("Bacon Cheeseburger", false);
    insert into burgers
        (burger_name, devoured)
    values("Turkey Burger", true);
    insert into burgers
        (burger_name, devoured)
    values("Chicken Burger", false)