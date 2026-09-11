# AboveFL360 PSR & PET Practice Test

A simple, static quiz site. 27 questions, no timer, no scoring shown to the
student. Answers are saved to Supabase.

## 1. Create the Supabase table

In your Supabase project, open the SQL editor and run:

```sql
create table quiz_responses (
  id uuid primary key default gen_random_uuid(),
  created_at timestamp with time zone default now(),
  name text not null,
  email text not null,
  answers jsonb not null
);

alter table quiz_responses enable row level security;

create policy "Allow public insert"
on quiz_responses
for insert
to anon
with check (true);
```

This lets the public site insert new rows, but not read, update, or delete
anything. You can view responses from the Supabase Table Editor.

## 2. Add your Supabase keys

Open `config.js` and fill in your project URL and anon public key
(Project Settings -> API in Supabase):

```js
const SUPABASE_URL = "https://xxxx.supabase.co";
const SUPABASE_ANON_KEY = "your-anon-key";
```

## 3. Publish on GitHub Pages

1. Push this folder to a GitHub repository.
2. In the repo, go to Settings -> Pages.
3. Under "Build and deployment", choose "Deploy from a branch", pick your
   main branch and the root folder.
4. Save. Your site will be live at `https://yourusername.github.io/reponame/`
   in a minute or two.

## Files

- `index.html` — the page
- `style.css` — styling
- `script.js` — quiz logic and Supabase submission
- `questions.js` — the 27 questions and options
- `config.js` — your Supabase URL and key (fill this in)
- `assets/logo.png` — AboveFL360 logo
