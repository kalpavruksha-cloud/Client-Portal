"use client";

import Image from "next/image";
import { FormEvent, useMemo, useState, type ComponentType } from "react";

type IconComponent = ComponentType<{ size?: number }>;

function makeIcon(paths: string[]): IconComponent {
  const Icon = ({ size = 20 }: { size?: number }) => (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths.map((path) => <path d={path} key={path} />)}
    </svg>
  );
  return Icon;
}

const ArrowDownRight = makeIcon(["M7 7h10v10", "M17 17 7 7"]);
const ArrowRight = makeIcon(["M5 12h14", "m13 6 6-6-6-6"]);
const ArrowUpRight = makeIcon(["M7 17 17 7", "M7 7h10v10"]);
const BadgeIndianRupee = makeIcon(["M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18", "M9 8h6", "M9 12h5", "M10 8c3 0 3 4 0 4l4 4"]);
const Banknote = makeIcon(["M3 7h18v10H3z", "M7 11h.01", "M17 13h.01", "M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4"]);
const Bell = makeIcon(["M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9", "M10 21h4"]);
const BookOpenCheck = makeIcon(["M4 5a3 3 0 0 1 3-3h13v17H7a3 3 0 0 0-3 3z", "m9 11 2 2 4-5"]);
const BriefcaseBusiness = makeIcon(["M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1", "M3 7h18v12H3z", "M3 12h18"]);
const CalendarDays = makeIcon(["M8 2v4", "M16 2v4", "M3 9h18", "M5 4h14a2 2 0 0 1 2 2v14H3V6a2 2 0 0 1 2-2"]);
const CheckCircle2 = makeIcon(["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18", "m8 12 2.5 2.5L16 9"]);
const ChevronDown = makeIcon(["m6 9 6 6 6-6"]);
const CircleHelp = makeIcon(["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18", "M9.5 9a2.5 2.5 0 0 1 5 0c0 2-2.5 2-2.5 4", "M12 17h.01"]);
const ClipboardList = makeIcon(["M9 3h6l1 2h3v16H5V5h3z", "M9 12h6", "M9 16h6"]);
const CreditCard = makeIcon(["M3 6h18v12H3z", "M3 10h18", "M7 15h3"]);
const Download = makeIcon(["M12 3v12", "m7 10 5 5 5-5", "M5 21h14"]);
const FileCheck2 = makeIcon(["M14 2H6v20h12V6z", "M14 2v4h4", "m8 14 2 2 4-5"]);
const FileText = makeIcon(["M14 2H6v20h12V6z", "M14 2v4h4", "M8 12h8", "M8 16h8"]);
const FolderOpen = makeIcon(["M3 7h7l2 2h9v10H3z", "M3 19l3-7h15"]);
const Gauge = makeIcon(["M4 14a8 8 0 1 1 16 0", "M12 14l4-4", "M8 18h8"]);
const HandCoins = makeIcon(["M4 14h4l3 3h5a3 3 0 0 0 3-3", "M4 10h3l4 4", "M16 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6"]);
const Headphones = makeIcon(["M4 14v-2a8 8 0 0 1 16 0v2", "M4 14h4v6H4z", "M16 14h4v6h-4z"]);
const Landmark = makeIcon(["M3 10h18", "M5 10v9", "M9 10v9", "M15 10v9", "M19 10v9", "M2 21h20", "M12 3l9 5H3z"]);
const LayoutDashboard = makeIcon(["M3 3h8v8H3z", "M13 3h8v5h-8z", "M13 10h8v11h-8z", "M3 13h8v8H3z"]);
const LogOut = makeIcon(["M10 17l5-5-5-5", "M15 12H3", "M21 3v18"]);
const Menu = makeIcon(["M4 6h16", "M4 12h16", "M4 18h16"]);
const RefreshCw = makeIcon(["M21 12a9 9 0 0 1-15 6.7L3 16", "M3 12a9 9 0 0 1 15-6.7L21 8"]);
const Search = makeIcon(["M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16", "m21 21-4.3-4.3"]);
const Settings = makeIcon(["M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6", "M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.5-2.4 1a7 7 0 0 0-1.7-1L14.5 3h-5l-.4 3a7 7 0 0 0-1.7 1L5 6 3 9.5 5 11a7 7 0 0 0 0 2l-2 1.5L5 18l2.4-1a7 7 0 0 0 1.7 1l.4 3h5l.4-3a7 7 0 0 0 1.7-1l2.4 1 2-3.5-2-1.5a7 7 0 0 0 .1-1"]);
const ShieldCheck = makeIcon(["M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", "m9 12 2 2 4-5"]);
const TrendingUp = makeIcon(["M3 17 9 11l4 4 7-8", "M14 7h6v6"]);
const User = makeIcon(["M20 21a8 8 0 0 0-16 0", "M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8"]);
const UserPlus = makeIcon(["M15 21a6 6 0 0 0-12 0", "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8", "M19 8v6", "M16 11h6"]);
const WalletCards = makeIcon(["M3 7h18v12H3z", "M3 10h18", "M7 15h5", "M17 15h1"]);
const X = makeIcon(["M6 6l12 12", "M18 6 6 18"]);

const client = {
  name: "Arjun Rao",
  email: "arjun.rao@example.com",
  id: "KVP-2595",
  tier: "Private Client",
  relationship: "Since 2024",
};

const accounts = [
  {
    id: "2595",
    status: "Active",
    invested: "₹18,50,000",
    returns: "₹27,750",
    payoutDay: "20th pay day NTDS",
    term: "12 months",
    rate: "1.5% / month",
  },
  {
    id: "2854",
    status: "Active",
    invested: "₹12,00,000",
    returns: "₹18,000",
    payoutDay: "25th NTDS pay date 6%",
    term: "9 months",
    rate: "1.5% / month",
  },
];

const transactions = [
  {
    id: "#3865",
    type: "Investment",
    account: "2854",
    date: "25/04/2026",
    bank: "HDFC Bank •••• 8142",
    amount: "₹12,00,000",
    status: "Completed",
  },
  {
    id: "#24789",
    type: "Payout",
    account: "2595",
    date: "20/04/2026",
    bank: "ICICI Bank •••• 5521",
    amount: "₹27,750",
    status: "Completed",
  },
  {
    id: "#3475",
    type: "Investment",
    account: "2595",
    date: "20/03/2026",
    bank: "Axis Bank •••• 7310",
    amount: "₹18,50,000",
    status: "Completed",
  },
];

const initialClientRecords = [
  { id: "KVP-2595", name: "Arjun Rao", capital: "Rs. 18.5L", returns: "Rs. 27.7K", accounts: 2, status: "Active" },
  { id: "KVP-2854", name: "Meera Iyer", capital: "Rs. 12.0L", returns: "Rs. 18.0K", accounts: 1, status: "Active" },
  { id: "KVP-3031", name: "Rohan Shah", capital: "Rs. 9.8L", returns: "Rs. 14.7K", accounts: 1, status: "Review" },
];

const menu = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "accounts", label: "Account Overview", icon: WalletCards },
  { id: "bank", label: "Bank Details", icon: Landmark },
  { id: "transactions", label: "Transactions", icon: ArrowRight },
  { id: "add", label: "Add Investment", icon: BriefcaseBusiness },
  { id: "withdrawals", label: "Withdrawals", icon: HandCoins },
  { id: "agreements", label: "Agreements", icon: FileCheck2 },
  { id: "documents", label: "Documents", icon: FolderOpen },
  { id: "referrals", label: "Referrals", icon: UserPlus },
  { id: "profile", label: "Profile", icon: User },
  { id: "faq", label: "FAQ", icon: CircleHelp },
  { id: "support", label: "Help & Support", icon: Headphones },
  { id: "settings", label: "Settings", icon: Settings },
];

type View = (typeof menu)[number]["id"];
type AuthMode = "client" | "admin" | "register";
type PortalMode = "client" | "admin";

export default function ClientPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authMode, setAuthMode] = useState<AuthMode>("client");
  const [portalMode, setPortalMode] = useState<PortalMode>("client");
  const [activeView, setActiveView] = useState<View>("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [error, setError] = useState("No client record found. Please register or contact support.");

  const activeMeta = useMemo(
    () => menu.find((item) => item.id === activeView) ?? menu[0],
    [activeView],
  );

  function handleLogin(event: FormEvent<HTMLFormElement>, mode: PortalMode = "client") {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") || "");
    const password = String(form.get("password") || "");

    if (!email || !password) {
      setError("Enter your email address and password to continue.");
      return;
    }

    setError("");
    setPortalMode(mode);
    setIsLoggedIn(true);
  }

  function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("Registration submitted. Your client access will be activated after admin approval.");
    setAuthMode("client");
  }

  function exportCsv() {
    const header = "Transaction ID,Type,Account ID,Date,Bank,Amount,Status";
    const body = transactions
      .map((row) => `${row.id},${row.type},${row.account},${row.date},${row.bank},${row.amount},${row.status}`)
      .join("\n");
    const blob = new Blob([`${header}\n${body}`], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "kalpavruksha-transactions.csv";
    link.click();
    URL.revokeObjectURL(url);
  }

  if (!isLoggedIn) {
    return (
      <main className={`login-shell auth-${authMode}`}>
        <section className="login-stage" aria-label="Client login">
          <aside className="brand-panel">
            <BrandMark size="large" />
            <p className="eyebrow">{authMode === "admin" ? "Admin Access" : "Client Access"}</p>
            <h1>{authMode === "admin" ? "Admin Control Portal" : authMode === "register" ? "Client Registration" : "Client Portal Login"}</h1>
            <p className="brand-copy">
              {authMode === "admin"
                ? "Manage clients, investments, payouts, documents, and cumulative business intelligence."
                : "Use your client credentials to access investment reports, documents, and account insights."}
            </p>
            <div className="access-card">
              <strong>Separate access for each portal</strong>
              <p>
                Client access is isolated from admin controls so reporting, approvals, and account records stay clear.
              </p>
              <button className="secondary-button" type="button" onClick={() => setAuthMode(authMode === "admin" ? "client" : "admin")}>
                {authMode === "admin" ? "Client Login" : "Admin Login"}
              </button>
              <button className="primary-button compact" type="button" onClick={() => setAuthMode(authMode === "register" ? "client" : "register")}>
                {authMode === "register" ? "Back to Login" : "New client? Register"}
              </button>
            </div>
          </aside>

          {authMode === "register" ? (
            <RegisterCard onSubmit={handleRegister} onBack={() => setAuthMode("client")} />
          ) : (
            <LoginCard
              mode={authMode}
              error={error}
              onSubmit={(event) => handleLogin(event, authMode === "admin" ? "admin" : "client")}
              onRegister={() => setAuthMode("register")}
            />
          )}
        </section>
      </main>
    );
  }

  if (portalMode === "admin") {
    return <AdminPortal onLogout={() => {
      setIsLoggedIn(false);
      setAuthMode("admin");
    }} />;
  }

  return (
    <main className="portal-shell">
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-top">
          <BrandMark size="side" />
          <button className="icon-button close-sidebar" type="button" onClick={() => setSidebarOpen(false)} aria-label="Close menu">
            <X size={18} />
          </button>
        </div>
        <nav className="side-nav" aria-label="Portal sections">
          {menu.map((item) => {
            const Icon = item.icon;
            return (
              <button
                className={activeView === item.id ? "active" : ""}
                key={item.id}
                type="button"
                onClick={() => {
                  setActiveView(item.id);
                  setSidebarOpen(false);
                }}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
        <button className="logout-button" type="button" onClick={() => {
          setIsLoggedIn(false);
          setAuthMode("client");
        }}>
          <LogOut size={18} />
          Logout
        </button>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <button className="icon-button menu-button" type="button" onClick={() => setSidebarOpen(true)} aria-label="Open menu">
            <Menu size={20} />
          </button>
          <div className="search-box">
            <Search size={18} />
            <input placeholder="Search..." aria-label="Search portal" />
          </div>
          <button className="icon-button" type="button" aria-label="Notifications">
            <Bell size={19} />
          </button>
          <div className="client-chip">
            <User size={17} />
            <span>{client.name}</span>
          </div>
        </header>

        <div className="content">
          <div className="page-title">
            <div>
              <h1>{activeView === "dashboard" ? `Welcome back, ${client.name}` : activeMeta.label}</h1>
              <p>{subtitleFor(activeView)}</p>
            </div>
            <button className="outline-button" type="button">
              <RefreshCw size={16} />
              Refresh
            </button>
          </div>

          {activeView === "dashboard" && <DashboardView setActiveView={setActiveView} />}
          {activeView === "accounts" && <AccountsView />}
          {activeView === "transactions" && <TransactionsView exportCsv={exportCsv} />}
          {activeView === "bank" && <InfoView icon={Landmark} title="Verified Bank Mandates" text="Primary payout account is active and ready for monthly credits." detail="HDFC Bank •••• 8142" />}
          {activeView === "add" && <ActionForm title="Start a New Investment" cta="Submit Investment Request" />}
          {activeView === "withdrawals" && <ActionForm title="Request a Withdrawal" cta="Submit Withdrawal Request" />}
          {activeView === "agreements" && <AgreementsView />}
          {activeView === "documents" && <DocumentsView />}
          {activeView === "referrals" && <InfoView icon={UserPlus} title="Referral Program" text="Share your private referral code and track rewards after successful onboarding." detail="KVP-ARJUN-2595" />}
          {activeView === "profile" && <ProfileView />}
          {activeView === "faq" && <FaqView />}
          {activeView === "support" && <InfoView icon={Headphones} title="Priority Support" text="Relationship desk is available for account updates, payout questions, and document requests." detail="+91 98765 43210 • support@kalpavruksha.in" />}
          {activeView === "settings" && <SettingsView />}
        </div>
      </section>
    </main>
  );
}

function LoginCard({
  mode,
  error,
  onSubmit,
  onRegister,
}: {
  mode: AuthMode;
  error: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onRegister: () => void;
}) {
  const isAdmin = mode === "admin";

  return (
    <section className={`login-card ${isAdmin ? "admin-card" : ""}`}>
      <div className="login-heading">
        <div>
          <p className="eyebrow green">{isAdmin ? "Admin Login" : "Client Login"}</p>
          <h2>{isAdmin ? "Open cumulative control dashboard" : "Access your portfolio dashboard"}</h2>
        </div>
        <BrandMark />
      </div>
      <form onSubmit={onSubmit} className="login-form">
        <label>
          Email address
          <input name="email" type="email" placeholder={isAdmin ? "admin@kalpavruksha.in" : "client@kalpavruksha.in"} autoComplete="email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder={isAdmin ? "admin123" : "client123"} autoComplete="current-password" />
        </label>
        {error ? <div className={isAdmin ? "error-banner admin-note" : "error-banner"}>{isAdmin ? "Demo admin: admin@kalpavruksha.in / admin123" : error}</div> : null}
        <button className="primary-button" type="submit">{isAdmin ? "Login to Admin Portal" : "Login to Client Portal"}</button>
      </form>
      <div className="help-card">
        <strong>{isAdmin ? "Administrator controls" : "Need help?"}</strong>
        <p>
          {isAdmin
            ? "Admins can add clients, remove clients, review cumulative capital, payouts, agreements, and pending requests."
            : "If you do not have access, register a new client account or ask your admin to invite you."}
        </p>
        {!isAdmin ? <button className="text-button" type="button" onClick={onRegister}>Create client registration</button> : null}
      </div>
    </section>
  );
}

function RegisterCard({ onSubmit, onBack }: { onSubmit: (event: FormEvent<HTMLFormElement>) => void; onBack: () => void }) {
  return (
    <section className="login-card register-card">
      <div className="login-heading">
        <div>
          <p className="eyebrow green">Client Register</p>
          <h2>Create your client access request</h2>
        </div>
        <BrandMark />
      </div>
      <form onSubmit={onSubmit} className="login-form register-form">
        <div className="form-grid">
          <label>Full name<input name="name" placeholder="Your full name" required /></label>
          <label>Mobile number<input name="mobile" placeholder="+91 98765 43210" required /></label>
        </div>
        <label>Email address<input name="email" type="email" placeholder="you@example.com" required /></label>
        <div className="form-grid">
          <label>PAN / ID<input name="pan" placeholder="ABCDE1234F" required /></label>
          <label>Investment range<select name="range"><option>Rs. 5L - Rs. 10L</option><option>Rs. 10L - Rs. 25L</option><option>Rs. 25L+</option></select></label>
        </div>
        <label>Notes<textarea name="notes" placeholder="Tell the relationship desk what you want to invest in" /></label>
        <button className="primary-button" type="submit">Submit Registration</button>
        <button className="secondary-light-button" type="button" onClick={onBack}>Back to Client Login</button>
      </form>
    </section>
  );
}

function AdminPortal({ onLogout }: { onLogout: () => void }) {
  const [activeAdminView, setActiveAdminView] = useState("overview");
  const [adminSidebarOpen, setAdminSidebarOpen] = useState(false);
  const [clientRecords, setClientRecords] = useState(initialClientRecords);

  const adminMenu = [
    { id: "overview", label: "Cumulative Overview", icon: Gauge },
    { id: "clients", label: "Client Management", icon: UserPlus },
    { id: "investments", label: "Investment Control", icon: BriefcaseBusiness },
    { id: "payouts", label: "Payout Review", icon: HandCoins },
    { id: "documents", label: "Agreements & Docs", icon: FileCheck2 },
    { id: "settings", label: "Admin Settings", icon: Settings },
  ];

  const activeAdmin = adminMenu.find((item) => item.id === activeAdminView) ?? adminMenu[0];

  function addClient() {
    const next = clientRecords.length + 1;
    setClientRecords((records) => [
      ...records,
      {
        id: `KVP-40${next}`,
        name: `New Client ${next}`,
        capital: "Rs. 5.0L",
        returns: "Pending",
        accounts: 0,
        status: "Onboarding",
      },
    ]);
  }

  function removeClient(id: string) {
    setClientRecords((records) => records.filter((record) => record.id !== id));
  }

  return (
    <main className="portal-shell admin-shell">
      <aside className={`sidebar admin-sidebar ${adminSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-top">
          <BrandMark size="side" />
          <button className="icon-button close-sidebar" type="button" onClick={() => setAdminSidebarOpen(false)} aria-label="Close menu">
            <X size={18} />
          </button>
        </div>
        <nav className="side-nav" aria-label="Admin sections">
          {adminMenu.map((item) => {
            const Icon = item.icon;
            return (
              <button
                className={activeAdminView === item.id ? "active" : ""}
                key={item.id}
                type="button"
                onClick={() => {
                  setActiveAdminView(item.id);
                  setAdminSidebarOpen(false);
                }}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
        <button className="logout-button" type="button" onClick={onLogout}>
          <LogOut size={18} />
          Logout Admin
        </button>
      </aside>

      <section className="workspace">
        <header className="topbar admin-topbar">
          <button className="icon-button menu-button" type="button" onClick={() => setAdminSidebarOpen(true)} aria-label="Open menu">
            <Menu size={20} />
          </button>
          <div className="search-box">
            <Search size={18} />
            <input placeholder="Search clients, accounts, transactions..." aria-label="Search admin portal" />
          </div>
          <button className="outline-button" type="button" onClick={addClient}><UserPlus size={16} /> Add Client</button>
          <div className="client-chip admin-chip">
            <ShieldCheck size={17} />
            <span>Admin</span>
          </div>
        </header>

        <div className="content">
          <div className="page-title">
            <div>
              <h1>{activeAdmin.label}</h1>
              <p>Admin can add, remove, edit and review every client detail in cumulative form.</p>
            </div>
            <button className="outline-button" type="button"><RefreshCw size={16} /> Sync Records</button>
          </div>

          {activeAdminView === "overview" && <AdminOverview clients={clientRecords} onAddClient={addClient} />}
          {activeAdminView === "clients" && <AdminClients clients={clientRecords} onAddClient={addClient} onRemoveClient={removeClient} />}
          {activeAdminView === "investments" && <AdminControlPanel title="Investment Control" />}
          {activeAdminView === "payouts" && <AdminControlPanel title="Payout Review" />}
          {activeAdminView === "documents" && <AdminControlPanel title="Agreements & Docs" />}
          {activeAdminView === "settings" && <SettingsView />}
        </div>
      </section>
    </main>
  );
}

function AdminOverview({ clients, onAddClient }: { clients: typeof initialClientRecords; onAddClient: () => void }) {
  return (
    <div className="stack admin-stack">
      <section className="admin-hero panel">
        <div>
          <p className="section-kicker">Command Center</p>
          <h2>Kalpavruksha cumulative portfolio intelligence</h2>
          <p>Track total capital, active accounts, payouts, pending approvals, and client health from one premium admin console.</p>
        </div>
        <button className="primary-button admin-add" type="button" onClick={onAddClient}><UserPlus size={16} /> Add New Client</button>
      </section>
      <div className="metric-grid">
        <Metric title="Total Clients" value={String(clients.length)} note="Across all accounts" icon={UserPlus} tone="indigo" />
        <Metric title="Total Capital" value="Rs. 40.3L" note="Cumulative invested" icon={TrendingUp} tone="green" />
        <Metric title="Monthly Payouts" value="Rs. 60.4K" note="Scheduled this month" icon={Banknote} tone="gold" />
        <Metric title="Open Reviews" value="7" note="KYC, payouts, agreements" icon={ClipboardList} tone="rose" />
      </div>
      <AdminClients clients={clients} onAddClient={onAddClient} onRemoveClient={() => undefined} compact />
    </div>
  );
}

function AdminClients({
  clients,
  onAddClient,
  onRemoveClient,
  compact = false,
}: {
  clients: typeof initialClientRecords;
  onAddClient: () => void;
  onRemoveClient: (id: string) => void;
  compact?: boolean;
}) {
  return (
    <section className="panel admin-table-panel">
      <div className="panel-head">
        <h2>{compact ? "Priority Client Snapshot" : "Client Management"}</h2>
        {!compact ? <button className="outline-button" type="button" onClick={onAddClient}><UserPlus size={15} /> Add Client</button> : null}
      </div>
      <div className="admin-client-table">
        <div className="table-head admin-head">
          <span>Client</span><span>Client ID</span><span>Capital</span><span>Returns</span><span>Accounts</span><span>Status</span><span>Controls</span>
        </div>
        {clients.map((record) => (
          <div className="admin-client-row" key={record.id}>
            <strong>{record.name}</strong>
            <span>{record.id}</span>
            <span>{record.capital}</span>
            <span>{record.returns}</span>
            <span>{record.accounts}</span>
            <span className="status-pill">{record.status}</span>
            <span className="admin-actions">
              <button className="mini-button" type="button">Edit</button>
              <button className="mini-button danger" type="button" onClick={() => onRemoveClient(record.id)}>Remove</button>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function AdminControlPanel({ title }: { title: string }) {
  return (
    <div className="card-grid">
      {["Pending Approval", "Completed This Month", "Escalations", "Audit Trail"].map((label, index) => (
        <article className="panel document-panel admin-control-card" key={label}>
          <ClipboardList size={26} />
          <h2>{label}</h2>
          <p>{title} queue with admin review, status control, and cumulative reporting.</p>
          <strong>{index === 0 ? "7" : index === 1 ? "23" : index === 2 ? "2" : "156"} records</strong>
        </article>
      ))}
    </div>
  );
}

function BrandMark({ size = "default" }: { size?: "default" | "large" | "side" }) {
  return (
    <div className={`brand-mark ${size}`}>
      <Image src="/kalpavruksha-logo.png" alt="Kalpavruksha" width={168} height={168} priority={size === "large"} />
      {size === "side" ? <span>Wealth Portal</span> : null}
    </div>
  );
}

function DashboardView({ setActiveView }: { setActiveView: (view: View) => void }) {
  return (
    <div className="stack">
      <section>
        <SectionHeading icon={TrendingUp} title="This Month Summary" />
        <div className="metric-grid">
          <Metric title="Monthly Credits" value="₹0" note="Credits this month" icon={ArrowUpRight} tone="indigo" />
          <Metric title="Monthly Debits" value="₹0" note="Amount received this month" icon={ArrowDownRight} tone="gold" />
          <Metric title="Monthly Investment" value="₹0" note="New investments" icon={TrendingUp} tone="green" />
          <Metric title="Monthly Withdrawals" value="₹0" note="Released this month" icon={CreditCard} tone="rose" />
        </div>
      </section>

      <section className="panel">
        <div className="panel-head">
          <h2>Performance Overview</h2>
          <button className="link-button" type="button">View Analytics <ArrowRight size={15} /></button>
        </div>
        <div className="performance-grid">
          <MiniStat icon={WalletCards} label="Withdrawal Transactions" value="₹0.00" />
          <MiniStat icon={TrendingUp} label="Total Payouts" value="₹45,750" />
          <MiniStat icon={UserPlus} label="Referral Earnings" value="₹0" />
          <MiniStat icon={ShieldCheck} label="Total Referrals" value="0" />
        </div>
      </section>

      <section className="panel">
        <h2>Quick Actions</h2>
        <div className="quick-list">
          {[
            { title: "Add Investment", text: "Start a new investment plan", view: "add" as View, Icon: BriefcaseBusiness },
            { title: "Withdraw Funds", text: "Request a withdrawal", view: "withdrawals" as View, Icon: HandCoins },
            { title: "Refer & Earn", text: "Share your referral link", view: "referrals" as View, Icon: UserPlus },
          ].map(({ title, text, view, Icon }) => (
            <button type="button" key={title} onClick={() => setActiveView(view)}>
              <span className="quick-icon"><Icon size={18} /></span>
              <span><strong>{title}</strong><small>{text}</small></span>
              <ArrowRight size={16} />
            </button>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading icon={Gauge} title="Total Summary" />
        <div className="metric-grid">
          <Metric title="Total Investment" value="₹30,50,000" note="All-time invested" icon={TrendingUp} tone="green" />
          <Metric title="Total Credits" value="₹45,750" note="All-time earned" icon={ArrowUpRight} tone="indigo" />
          <Metric title="Total Debits" value="₹0" note="All-time withdrawals" icon={ArrowDownRight} tone="gold" />
          <Metric title="Active Agreements" value="2" note="Out of 2 total" icon={BookOpenCheck} tone="purple" />
        </div>
      </section>

      <section className="panel">
        <div className="panel-head">
          <h2>Recent Transactions</h2>
          <button className="link-button" type="button" onClick={() => setActiveView("transactions")}>View All <ArrowRight size={15} /></button>
        </div>
        <TransactionRows compact />
      </section>
    </div>
  );
}

function AccountsView() {
  return (
    <div className="stack">
      <div className="tabs" role="tablist" aria-label="Account status">
        <button className="selected" type="button">Active</button>
        <button type="button">Inactive</button>
        <button type="button">All</button>
      </div>
      {accounts.map((account) => (
        <article className="account-card" key={account.id}>
          <div>
            <h2>A/C: {account.id}</h2>
            <span className="status-pill">{account.status}</span>
          </div>
          <div className="account-amount">
            <span>Invested Amount</span>
            <strong>{account.invested}</strong>
          </div>
          <div className="account-grid">
            <MiniStat icon={TrendingUp} label="Ret / Month" value={account.returns} />
            <MiniStat icon={CalendarDays} label="Payout Day" value={account.payoutDay} />
            <MiniStat icon={ClipboardList} label="Term" value={account.term} />
            <MiniStat icon={BadgeIndianRupee} label="Rate" value={account.rate} />
          </div>
          <button className="link-button account-link" type="button">View Details <ChevronDown size={15} /></button>
        </article>
      ))}
    </div>
  );
}

function TransactionsView({ exportCsv }: { exportCsv: () => void }) {
  return (
    <div className="stack">
      <div className="toolbar">
        <button className="outline-button" type="button" onClick={exportCsv}><Download size={16} /> Export Excel</button>
        <button className="outline-button" type="button" onClick={() => window.print()}><FileText size={16} /> Export PDF</button>
      </div>
      <div className="metric-grid two">
        <Metric title="Total Invested" value="₹30,50,000" note="Click to filter investments" icon={TrendingUp} tone="indigo" />
        <Metric title="Total Returns" value="₹45,750" note="Click to filter payouts" icon={Banknote} tone="green" />
      </div>
      <section className="panel">
        <p className="section-kicker">Search Records</p>
        <div className="search-row"><Search size={17} /><input placeholder="Search by ID, Bank, or UTR..." /></div>
        <div className="filter-row">
          <label>Type<select><option>All Types</option><option>Investment</option><option>Payout</option></select></label>
          <label>Period<select><option>All Time</option><option>This Month</option><option>Last 90 Days</option></select></label>
        </div>
      </section>
      <p className="muted">Showing 3 records</p>
      <TransactionRows />
    </div>
  );
}

function TransactionRows({ compact = false }: { compact?: boolean }) {
  return (
    <div className="table-card">
      {!compact ? (
        <div className="table-head">
          <span>Transaction ID</span><span>Head</span><span>Account ID</span><span>Date</span><span>Bank Details</span><span>Amount</span>
        </div>
      ) : null}
      {transactions.map((row) => (
        <div className={compact ? "transaction-row compact" : "transaction-row"} key={row.id}>
          <span className="id-pill">{row.id}</span>
          <span className="row-type"><i className={row.type === "Payout" ? "green-dot" : ""} />{row.type}</span>
          <span className="id-pill">{row.account}</span>
          <span>{row.date}</span>
          <span>{row.bank}</span>
          <strong>{row.amount}</strong>
        </div>
      ))}
    </div>
  );
}

function AgreementsView() {
  return (
    <div className="card-grid">
      {accounts.map((account) => (
        <article className="panel document-panel" key={account.id}>
          <FileCheck2 size={26} />
          <h2>Investment Agreement A/C {account.id}</h2>
          <p>Signed agreement, payout schedule, and account declaration are ready for download.</p>
          <button className="outline-button" type="button"><Download size={15} /> Download</button>
        </article>
      ))}
    </div>
  );
}

function DocumentsView() {
  return (
    <div className="card-grid">
      {["KYC Certificate", "Payout Statement", "Tax Summary", "Investment Ledger"].map((title) => (
        <article className="panel document-panel" key={title}>
          <FolderOpen size={26} />
          <h2>{title}</h2>
          <p>Updated and verified for your client account.</p>
          <button className="outline-button" type="button"><Download size={15} /> Download</button>
        </article>
      ))}
    </div>
  );
}

function ProfileView() {
  return (
    <section className="panel profile-panel">
      <div className="avatar-large"><User size={30} /></div>
      <div>
        <h2>{client.name}</h2>
        <p>{client.tier} • {client.relationship}</p>
      </div>
      <div className="profile-grid">
        <InfoLine label="Client ID" value={client.id} />
        <InfoLine label="Email" value={client.email} />
        <InfoLine label="Mobile" value="+91 98765 43210" />
        <InfoLine label="PAN Status" value="Verified" />
      </div>
    </section>
  );
}

function FaqView() {
  return (
    <div className="stack">
      {[
        ["When are payouts credited?", "Payouts are processed on the schedule shown inside each active account."],
        ["How do I add investment?", "Use Add Investment and your relationship desk will verify the request."],
        ["Where are agreements stored?", "All signed agreements and statements are available in Documents."],
      ].map(([question, answer]) => (
        <details className="faq-item" key={question} open>
          <summary>{question}</summary>
          <p>{answer}</p>
        </details>
      ))}
    </div>
  );
}

function SettingsView() {
  return (
    <div className="card-grid">
      <ToggleCard title="Email Alerts" text="Receive payout and document updates." />
      <ToggleCard title="SMS Alerts" text="Receive critical account activity messages." />
      <ToggleCard title="Two-Step Review" text="Ask for confirmation before withdrawal requests." />
    </div>
  );
}

function ActionForm({ title, cta }: { title: string; cta: string }) {
  return (
    <form className="panel action-form">
      <h2>{title}</h2>
      <label>Account<select><option>A/C 2595</option><option>A/C 2854</option></select></label>
      <label>Amount<input placeholder="₹ Enter amount" /></label>
      <label>Notes<textarea placeholder="Add a short instruction for the relationship desk" /></label>
      <button className="primary-button" type="button">{cta}</button>
    </form>
  );
}

function InfoView({ icon: Icon, title, text, detail }: { icon: IconComponent; title: string; text: string; detail: string }) {
  return (
    <section className="panel info-view">
      <Icon size={34} />
      <h2>{title}</h2>
      <p>{text}</p>
      <strong>{detail}</strong>
    </section>
  );
}

function Metric({ title, value, note, icon: Icon, tone }: { title: string; value: string; note: string; icon: IconComponent; tone: string }) {
  return (
    <article className="metric-card">
      <div>
        <span>{title}</span>
        <strong>{value}</strong>
        <small>{note}</small>
      </div>
      <i className={`metric-icon ${tone}`}><Icon size={21} /></i>
    </article>
  );
}

function MiniStat({ icon: Icon, label, value }: { icon: IconComponent; label: string; value: string }) {
  return (
    <div className="mini-stat">
      <span><Icon size={18} /></span>
      <div>
        <small>{label}</small>
        <strong>{value}</strong>
      </div>
    </div>
  );
}

function SectionHeading({ icon: Icon, title }: { icon: IconComponent; title: string }) {
  return <h2 className="section-heading"><Icon size={19} />{title}</h2>;
}

function InfoLine({ label, value }: { label: string; value: string }) {
  return <div className="info-line"><span>{label}</span><strong>{value}</strong></div>;
}

function ToggleCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="panel setting-card">
      <CheckCircle2 size={24} />
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <label className="switch"><input type="checkbox" defaultChecked /><span /></label>
    </article>
  );
}

function subtitleFor(view: View) {
  const subtitles: Record<View, string> = {
    dashboard: "Here's your financial summary at a glance.",
    accounts: "Manage and view details of your registered investment accounts.",
    bank: "Review verified payout and investment bank mandates.",
    transactions: "Your complete financial activity history.",
    add: "Create a new investment request for review.",
    withdrawals: "Request funds and monitor withdrawal status.",
    agreements: "Access signed agreements and payout schedules.",
    documents: "Download client statements and compliance documents.",
    referrals: "Invite trusted investors and view referral rewards.",
    profile: "Manage your registered client information.",
    faq: "Answers to common client portal questions.",
    support: "Connect with your relationship support desk.",
    settings: "Control alerts, security, and portal preferences.",
  };

  return subtitles[view];
}
