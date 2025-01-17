CREATE TABLE contact_forms (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    contact_method VARCHAR(50) NOT NULL,
    email VARCHAR(100),
    phone VARCHAR(15),
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE services (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price NUMERIC(10, 2) NOT NULL
);

CREATE TABLE gallery (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    image_url TEXT NOT NULL
);
