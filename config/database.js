const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "aws-0-ap-south-1.pooler.supabase.com"),
      port: env("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "postgres"),
      user: env("DATABASE_USERNAME", "postgres.mcwfvmkcargnxjxvxzhd"),
      password: env("DATABASE_PASSWORD", "Pratyuh1902@"),
      ssl: env.bool("DATABASE_SSL", false)
    },
    useNullAsDefault: true
  }
});