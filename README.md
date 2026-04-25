# Resostu

All-in-one platform for PG/rental accommodation and tuition/coaching centre management.

## Tech Stack

- **Frontend**: HTML, CSS, Vanilla JavaScript
- **Backend**: Node.js + Express
- **Database**: MySQL

## Design Theme

- **Colors**: Gold (#c9a84c) and Black (#0d0d0b)
- **Font**: Calibri
- **Style**: Dark premium theme

## User Roles

1. PG Owner
2. Tenant
3. Student
4. Teacher
5. Parent
6. Admin/Director

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy `.env.example` to `.env` and configure your environment variables

4. Create the database and run migrations:
   ```bash
   mysql -u root -p < database/schema.sql
   ```

5. Start the server:
   ```bash
   npm run dev
   ```

6. Open `frontend/index.html` in your browser or use Live Server

## Project Structure

See `/docs` folder for detailed documentation.

## License

ISC
