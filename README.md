<p align="center">
  A full-featured SaaS starter with auth, billing, and entitlements—powered by <a href="https://update.dev/">Update</a> and <a href="https://nextjs.org/">Next.js</a>.
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#demo"><strong>Demo</strong></a> ·
  <a href="#deploy-to-vercel"><strong>Deploy to Vercel</strong></a> ·
  <a href="#local-setup"><strong>Local Setup</strong></a> ·
  <a href="#support"><strong>Support</strong></a>
</p>

---

## ⚡ Features

- 💳 **Subscriptions** — Stripe billing with checkout, portals, trials, and failed payment recovery
- 🔐 **Authentication** — Supabase auth with Update-powered extensions (e.g., magic links, redirects)
- 🔓 **Entitlements** — Easy access control by plan, org, or user role
- ⚙️ **Full-stack ready** — App Router, Middleware, Client, and Server usage supported
- 🎨 **UI** — Built with [Tailwind CSS](https://tailwindcss.com) and [shadcn/ui](https://ui.shadcn.com)

---

## 🛠️ Local Setup

### 1. Clone the project

```bash
git clone https://github.com/Jacob-A11/Next-Supabase-Stripe.git
```

### 2. Install dependencies

```bash
npm install
```

# or

```bash
pnpm install
```

### 3. Configure environment variables

Create a `.env.local` file based on the provided example:

```bash
cp .env.example .env.local
```

Fill in values from:

- [Update dashboard](https://update.dev)
- [Supabase project settings](https://app.supabase.com/project/_/settings/api)

```bash
NEXT_PUBLIC_UPDATE_PUBLIC_KEY=...
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## 📦 What's Included

- 🔌 **Update Client Setup**:
  - `utils/update/client.ts` — for browser-side usage
  - `utils/update/server.ts` — for server-side usage
- 🧠 **Entitlements Checks**:
  - Example usage of `client.entitlements.check()` to conditionally render UI
- 💳 **Billing Integration**:
  - Stripe Checkout & Customer Portal
  - Cancel/reactivate subscriptions
  - Usage-based plans (coming soon)

---

## 🧩 Tech Stack

- [Next.js](https://nextjs.org)
- [Update](https://update.dev)
- [Supabase](https://supabase.com)
- [Stripe](https://stripe.com)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)

---

## 🤝 Support

- 📚 [Full documentation](https://update.dev/docs)
- 💬 [Join our Discord](https://discord.gg/Guege5tXFK)
- 🐛 Found a bug? [Open an issue](https://github.com/Jacob-A11/Next-Supabase-Stripe.git)

---

## 📄 License

MIT
