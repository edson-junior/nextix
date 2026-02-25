-- CREATE DATABASE nextix;

CREATE USER nextix_admin
WITH
  encrypted password 'nextix12345';

CREATE DATABASE nextix OWNER nextix_admin;

GRANT ALL privileges ON database nextix TO nextix_admin;

-- GRANT SELECT ON ALL TABLES IN SCHEMA public TO nextix_admin;
GRANT ALL PRIVILEGES ON SCHEMA public TO nextix_admin;

CREATE TABLE products (
  product_id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  image varchar(255),
  name varchar(255),
  date date,
  location varchar(255),
  price integer,
  description varchar
);

INSERT INTO
  products (
    image,
    name,
    price,
    date,
    location,
    description
  )
VALUES
  (
    'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=800',
    'Urban Gardening Volunteer Day',
    0.0,
    '2026-05-02T10:00:00',
    'Green Fingers Community Plot, Brooklyn',
    '<p>Help us prepare our community sanctuary for the spring season! It’s a great way to learn about <strong>sustainable urban agriculture</strong> while giving back to the neighborhood.</p><p><strong>Activity List:</strong></p><ul><li>Building new raised garden beds.</li><li>Composting and soil preparation.</li><li>Planting native pollinator-friendly flowers.</li></ul><p>We provide all the tools, gloves, and a community BBQ celebration at the end of the day.</p>'
  ),
  (
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800',
    'Photography Walk: Neon Lights Edition',
    '2026-03-25T19:30:00',
    'Shinjuku District, Tokyo',
    40.0,
    '<p>Capture the electric energy of Tokyo at night. This <strong>Photography Walk</strong> is designed for hobbyists and pros alike who want to master long-exposure and low-light shooting.</p><p><strong>What we will cover:</strong></p><ul><li>Balancing neon highlights with deep shadows.</li><li>Composition techniques for crowded urban environments.</li><li>Hand-held shooting vs. tripod stability.</li></ul><p>Small group size (max 8 people) to ensure everyone gets personalized feedback on their shots.</p>'
  );

SELECT
  *
FROM
  products;