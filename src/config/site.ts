export const defaultLocale = "zh";

export const locales = {
	zh: {
		label: "中文",
		lang: "zh-CN",
		path: "/",
	},
	en: {
		label: "English",
		lang: "en",
		path: "/en/",
	},
} as const;

export type Locale = keyof typeof locales;

const emptyResume = {
	summary: "",
	details: [] as { label: string; value: string }[],
	links: [] as { label: string; href: string }[],
	files: [] as { label: string; href: string }[],
	highlights: [] as string[],
	sections: [] as {
		title: string;
		items: {
			period: string;
			title: string;
			org: string;
			description: string;
			points: string[];
			link?: { name: string; href: string }[];
		}[];
	}[],
};

const shared = {
	name: "Atlas",
	email: "",
	emailIcon: "@",
	avatar: "",
	visitorCount: "0001",
	background: {
		image: "",
		blur: "0px",
		opacity: 0,
		scale: 1,
		overlay: "radial-gradient(circle at top left, rgba(255,255,255,0.12), transparent 30%), linear-gradient(180deg, #050505 0%, #000 55%, #090909 100%)",
		rain: {
			enabled: false,
			mode: "falling",
			density: 0.7,
			speed: 1,
			dropColor: "rgba(210, 230, 255, 0.5)",
			rippleColor: "rgba(210, 230, 255, 0.34)",
			maxDrops: 170,
			maxRipples: 48,
		},
	},
	socials: [] as { label: string; href: string; icon: string }[],
	skills: [] as string[],
};

const siteConfigs = {
	zh: {
		...shared,
		title: "",
		description: "个人网站",
		nav: [
			{ label: "首页", href: "/" },
			{ label: "关于我", href: "/about" },
			{ label: "项目", href: "/projects" },
			{ label: "博客", href: "/blog" },
			{ label: "图谱", href: "/graph" },
			{ label: "简历", href: "/resume" },
			{ label: "联系", href: "/contact" },
		],
		quickLinks: [
			{ label: "博客", href: "/blog", icon: "书" },
			{ label: "项目", href: "/projects", icon: "作" },
			{ label: "关于", href: "/about", icon: "我" },
			{ label: "简历", href: "/resume", icon: "历" },
			{ label: "联系", href: "/contact", icon: "@" },
		],
		today: {
			title: "今日",
			current: "",
			next: "",
			note: "",
			timeLabel: "当前时间",
			timeZone: "Asia/Shanghai",
			dateLocale: "zh-CN",
			greetings: ["凌晨好", "早上好", "上午好", "中午好", "下午好", "晚上好"],
		},
		ui: {
			headerCta: "联系",
			projectCta: "查看项目 ->",
			projectLiveCta: "访问项目",
			projectRepoCta: "查看代码",
			backToList: "返回列表",
			socialCardCta: "查看主页",
		},
		home: {
			eyebrowNote: "",
			visitorText: "访客编号 #{count}",
			headline: "欢迎访问",
			intro: "",
			primaryCta: { label: "看看项目", href: "/projects" },
			secondaryCta: { label: "打个招呼", href: "/contact" },
		},
		pages: {
			home: {
				title: "首页",
				description: "个人网站首页。",
				modules: [
					{ type: "homeHero" },
					{
						type: "projectGrid",
						props: {
							kicker: "Small Builds",
							title: "近期项目",
							featuredOnly: true,
							limit: 3,
							columns: 3,
						},
					},
					{
						type: "blogPreview",
						props: {
							kicker: "Notes",
							title: "最新笔记",
							limit: 3,
						},
					},
					{ type: "contactPanel" },
				],
			},
			about: {
				title: "关于我",
				description: "个人介绍。",
				modules: [
					{
						type: "aboutIntro",
						props: {
							kicker: "About",
							heading: "关于我",
							profileLabel: "Profile",
							profile: "",
							paragraphs: [],
						},
					},
					{ type: "contactPanel" },
				],
			},
			projects: {
				title: "项目 / 作品集",
				description: "项目作品。",
				modules: [
					{
						type: "projectGrid",
						props: {
							kicker: "Portfolio",
							title: "项目 / 作品集",
							columns: 2,
							largePadding: true,
						},
					},
				],
			},
			blog: {
				title: "博客 / 笔记",
				description: "博客文章和笔记。",
				modules: [
					{
						type: "blogIndex",
						props: {
							kicker: "Notes",
							title: "博客 / 笔记",
							labels: {
								search: "搜索标题、摘要或标签",
								all: "全部",
								empty: "没有找到符合条件的笔记。",
							},
						},
					},
				],
			},
			graph: {
				title: "知识图谱",
				description: "由博客标签和双链生成的知识图谱。",
				modules: [
					{
						type: "knowledgeGraph",
						props: {
							kicker: "Graph",
							title: "知识图谱",
							description: "每篇笔记都是一个节点，在这里可以看见整个知识库的结构。",
						},
					},
				],
			},
			resume: {
				title: "简历 / 经历",
				description: "个人简历。",
				profileLabel: "Profile",
				emailLabel: "Email",
				linksLabel: "Links",
				skillsLabel: "Skills",
				highlightsLabel: "Highlights",
				modules: [
					{
						type: "resume",
						props: {
							kicker: "Resume",
							title: "简历 / 经历",
						},
					},
				],
			},
			contact: {
				title: "联系方式",
				description: "联系这个个人网站的作者。",
				modules: [
					{
						type: "contactCards",
						props: {
							kicker: "Contact",
							heading: "联系方式",
						},
					},
					{ type: "contactPanel" },
				],
			},
		},
		contactPanel: {
			kicker: "Message",
			heading: "如果你在这里发现了有趣的项目或笔记，欢迎打个招呼。",
		},
		resume: { ...emptyResume },
	},
	en: {
		...shared,
		title: "",
		description: "Personal website",
		nav: [
			{ label: "Home", href: "/" },
			{ label: "About", href: "/about" },
			{ label: "Projects", href: "/projects" },
			{ label: "Blog", href: "/blog" },
			{ label: "Graph", href: "/graph" },
			{ label: "Resume", href: "/resume" },
			{ label: "Contact", href: "/contact" },
		],
		quickLinks: [
			{ label: "Blog", href: "/blog", icon: "N" },
			{ label: "Projects", href: "/projects", icon: "P" },
			{ label: "About", href: "/about", icon: "A" },
			{ label: "Resume", href: "/resume", icon: "R" },
			{ label: "Contact", href: "/contact", icon: "@" },
		],
		today: {
			title: "Today",
			current: "",
			next: "",
			note: "",
			timeLabel: "Current time",
			timeZone: "Asia/Shanghai",
			dateLocale: "en-US",
			greetings: ["Good late night", "Good early morning", "Good morning", "Good noon", "Good afternoon", "Good evening"],
		},
		ui: {
			headerCta: "Contact",
			projectCta: "View project ->",
			projectLiveCta: "Visit project",
			projectRepoCta: "View code",
			backToList: "Back to list",
			socialCardCta: "View profile",
		},
		home: {
			eyebrowNote: "",
			visitorText: "Visitor #{count}",
			headline: "Welcome",
			intro: "",
			primaryCta: { label: "View projects", href: "/projects" },
			secondaryCta: { label: "Contact", href: "/contact" },
		},
		pages: {
			home: {
				title: "Home",
				description: "Personal website homepage.",
				modules: [
					{ type: "homeHero" },
					{
						type: "projectGrid",
						props: {
							kicker: "Small Builds",
							title: "Recent projects",
							featuredOnly: true,
							limit: 3,
							columns: 3,
						},
					},
					{
						type: "blogPreview",
						props: {
							kicker: "Notes",
							title: "Latest notes",
							limit: 3,
						},
					},
					{ type: "contactPanel" },
				],
			},
			about: {
				title: "About",
				description: "Personal introduction.",
				modules: [
					{
						type: "aboutIntro",
						props: {
							kicker: "About",
							heading: "About",
							profileLabel: "Profile",
							profile: "",
							paragraphs: [],
						},
					},
					{ type: "contactPanel" },
				],
			},
			projects: {
				title: "Projects / Portfolio",
				description: "Project portfolio.",
				modules: [
					{
						type: "projectGrid",
						props: {
							kicker: "Portfolio",
							title: "Projects / Portfolio",
							columns: 2,
							largePadding: true,
						},
					},
				],
			},
			blog: {
				title: "Blog / Notes",
				description: "Blog posts and notes.",
				modules: [
					{
						type: "blogIndex",
						props: {
							kicker: "Notes",
							title: "Blog / Notes",
							labels: {
								search: "Search title, summary, or tags",
								all: "All",
								empty: "No notes match the current filters.",
							},
						},
					},
				],
			},
			graph: {
				title: "Knowledge Graph",
				description: "A knowledge graph generated from wiki links in blog posts.",
				modules: [
					{
						type: "knowledgeGraph",
						props: {
							kicker: "Graph",
							title: "Knowledge Graph",
							description: "Each note is a node. Wiki links create connections between notes.",
						},
					},
				],
			},
			resume: {
				title: "Resume / Experience",
				description: "Personal resume.",
				profileLabel: "Profile",
				emailLabel: "Email",
				linksLabel: "Links",
				skillsLabel: "Skills",
				highlightsLabel: "Highlights",
				modules: [
					{
						type: "resume",
						props: {
							kicker: "Resume",
							title: "Resume / Experience",
						},
					},
				],
			},
			contact: {
				title: "Contact",
				description: "Contact the author of this personal website.",
				modules: [
					{
						type: "contactCards",
						props: {
							kicker: "Contact",
							heading: "Contact",
						},
					},
					{ type: "contactPanel" },
				],
			},
		},
		contactPanel: {
			kicker: "Message",
			heading: "If you find an interesting project or note here, feel free to say hi.",
		},
		resume: { ...emptyResume },
	},
} as const;

export function isLocale(locale: string | undefined): locale is Locale {
	return locale === "zh" || locale === "en";
}

export function getLocaleFromUrl(url: URL): Locale {
	const firstSegment = url.pathname.split("/").filter(Boolean)[0];
	return isLocale(firstSegment) ? firstSegment : defaultLocale;
}

export function localizePath(locale: Locale, path: string): string {
	if (path.startsWith("http") || path.startsWith("mailto:")) return path;
	if (locale === defaultLocale) return path;
	if (path === "/") return `/${locale}/`;
	if (path.startsWith(`/${locale}/`)) return path;
	return `/${locale}${path}`;
}

function localizeModuleLinks(module: { type: string; props?: Record<string, unknown> }, locale: Locale) {
	if (module.type === "gameList" || module.type === "linkGrid") {
		const props = module.props as { items?: Array<string | { href?: string }> } | undefined;
		return {
			...module,
			props: {
				...module.props,
				items: props?.items?.map((item) => (
					typeof item === "string" ? item : { ...item, href: item.href ? localizePath(locale, item.href) : item.href }
				)),
			},
		};
	}

	return module;
}

function localizeSiteLinks<T extends typeof siteConfigs[Locale]>(config: T, locale: Locale): T {
	return {
		...config,
		nav: config.nav.map((item) => ({ ...item, href: localizePath(locale, item.href) })),
		quickLinks: config.quickLinks.map((item) => ({ ...item, href: localizePath(locale, item.href) })),
		home: {
			...config.home,
			primaryCta: { ...config.home.primaryCta, href: localizePath(locale, config.home.primaryCta.href) },
			secondaryCta: { ...config.home.secondaryCta, href: localizePath(locale, config.home.secondaryCta.href) },
		},
		pages: {
			...config.pages,
			...Object.fromEntries(
				Object.entries(config.pages).map(([key, page]) => [
					key,
					"modules" in page
						? { ...page, modules: page.modules.map((module) => localizeModuleLinks(module, locale)) }
						: page,
				]),
			),
		},
		resume: {
			...config.resume,
			links: config.resume.links.map((item) => ({ ...item, href: localizePath(locale, item.href) })),
		},
	} as T;
}

export function getSiteConfig(localeOrUrl: Locale | URL = defaultLocale) {
	const locale = localeOrUrl instanceof URL ? getLocaleFromUrl(localeOrUrl) : localeOrUrl;
	return localizeSiteLinks(siteConfigs[locale], locale);
}

export const siteConfig = getSiteConfig(defaultLocale);
