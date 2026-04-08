import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "首页", href: "#top" },
  { label: "优势", href: "#advantages" },
  { label: "广告样式", href: "#ad-formats" },
  { label: "场景变现", href: "#scenes" },
  { label: "安全防刷", href: "#security" },
  { label: "降低成本", href: "#benefits" },
  { label: "代理合作", href: "#partnership" },
  { label: "联系我们", href: "#contact" },
];

const heroStats = [
  { label: "活跃用户数据", value: "12 亿+" },
  { label: "开发插件数量", value: "19,027" },
  { label: "广告合作应用", value: "30,000+" },
];

const platforms = [
  { label: "Android", src: "/images/patform_15_.png" },
  { label: "iOS", src: "/images/patform_13_.png" },
  { label: "H5", src: "/images/patform_16_.png" },
  { label: "微信小程序", src: "/images/patform_14_.png" },
  { label: "百度小程序", src: "/images/patform_19_.png" },
  { label: "字节跳动小程序", src: "/images/patform_18_.png" },
];

const adFormats = [
  {
    title: "开屏广告",
    description: "全屏沉浸式展示广告，在 APP 开机启动时进行展示，品牌强势露出，提高品牌知名度。",
    image: "/images/ad-xxl.png",
  },
  {
    title: "信息流广告",
    description: "融入应用，提升体验，在应用列表页不影响用户浏览体验，支持多种广告形式展示。",
    image: "/images/ad-qp.png",
  },
  {
    title: "激励视频",
    description: "通过激励推动移动营销，在特定场景全屏展示，奖励用户观看广告行为。",
    image: "/images/ad-qpsp.png",
  },
  {
    title: "全屏视频",
    description: "通过全屏形式植入广告，在任意场景触发用户观看行为，可自由选择观看时间长度。",
    image: "/images/ad-cp.png",
  },
  {
    title: "插屏广告",
    description: "大屏弹出展示广告，图片或视频形式展示，满足大量曝光与用户转化需求。",
    image: "/images/ad-kp.png",
  },
  {
    title: "悬浮广告",
    description: "全场景悬浮红包广告，快速接入高级变现服务，实现内容场景沉浸式广告。",
    image: "/images/ad-xf.png",
  },
];

const sceneCards = [
  {
    title: "短视频",
    description: "短视频内容+广告，提供正版短视频内容，在短视频上下滑动时自动插入广告。",
    image: "/images/so-video_2x.png",
  },
  {
    title: "新闻资讯",
    description: "新闻内容+信息流广告，提供海量正版新闻资讯，快速构建应用新闻版块。",
    image: "/images/so-news.png",
  },
  {
    title: "电商",
    description: "电商+激励视频广告，快速部署电商模块，增加变现途径，提升用户参与。",
    image: "/images/so-mall.png",
  },
  {
    title: "电子书",
    description: "电子书内容+广告，提供正版电子书和系统源码，内置信息流与激励视频广告。",
    image: "/images/baker-app_2_2x.png",
  },
];

const benefits = [
  {
    title: "降低开发成本",
    description: "一次开发、全端覆盖，云端一体，开发效率提升 10 倍。",
    image: "/images/cost_2x_20_1_.png",
  },
  {
    title: "降低运维成本",
    description: "提供免费阿里云服务器，Serverless 免人工运维，免人工扩容，免 DDOS 攻击。",
    image: "/images/cost_2x_20_2_.png",
  },
  {
    title: "垫资服务",
    description: "针对优质开发者提供垫资服务，在渠道 SDK 广告平台未结算时，由 LiangDian 提前结算。",
    image: "/images/cost_2x_20_3_.png",
  },
];

const partnerLogos = [
  { alt: "LiangDian 生态", src: "/images/agent-logo_2x.png" },
  { alt: "商务咨询", src: "/images/agent-icon_2x.png" },
  { alt: "扫码咨询", src: "/images/zey1103.png" },
];

export default function Home() {
  return (
    <main id="top" className="relative overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_left,rgba(95,146,255,0.28),transparent_20%),radial-gradient(circle_at_top_right,rgba(84,213,255,0.16),transparent_25%)]" />
      <header className="sticky top-0 z-50 border-b border-slate-800/30 bg-slate-950/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-sm text-slate-200 sm:px-8">
          <div className="flex items-center gap-3">
            <img src="/images/adunion-logo-32.png" alt="LiangDian" className="h-24px w-24px" />
            <span className="text-sm font-semibold text-slate-100">量点 广告联盟</span>
          </div>
          <div className="hidden gap-6 text-slate-300 lg:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
          <div className="hidden items-center gap-3 sm:flex">
            <a href="#contact" className="rounded-full border border-slate-600 px-4 py-2 text-slate-200 transition hover:border-slate-400 hover:text-white">
              注册
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-400">
              登录 <ArrowRight size={16} />
            </a>
          </div>
        </div>
        <div className="border-t border-slate-800/30 bg-slate-950/95">
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-6 py-3 text-xs text-slate-300 sm:px-8">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/10 text-sky-300">🔊</span>
            <p className="max-w-4xl leading-6">
              新增“网赚合成游戏”项目源码，变现利器！新增“有奖猜歌游戏”项目源码，趣味变现！
            </p>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 pb-20 pt-10 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[minmax(0,1fr)_460px] lg:gap-20">
          <div className="relative z-10 flex flex-col justify-center gap-8 pt-6 pb-12 lg:pt-16">
            <div className="inline-flex items-center rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm text-sky-200">
              开发者忠实的商业化合作伙伴
            </div>
            <div className="space-y-6">
              <h1 className="max-w-3xl text-5xl font-black tracking-tight text-white sm:text-6xl">
                量点
              </h1>
              <p className="max-w-2xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
                全平台变现、更多收益
              </p>
              <p className="max-w-2xl text-base leading-8 text-slate-300">
                聚合 LiangDian 生态广告资源，支持 App、小程序、H5、PC 等全平台一键接入。
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button className="rounded-full bg-sky-500 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-500/20 hover:bg-sky-400">
                使用指南
              </Button>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/80 px-6 py-3 text-sm text-slate-200 transition hover:border-slate-400 hover:text-white">
                联系我们 <ArrowRight size={16} />
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-[0_20px_60px_-40px_rgba(15,23,42,0.55)] backdrop-blur-xl">
                  <p className="text-sm text-slate-300">{stat.label}</p>
                  <p className="mt-3 text-3xl font-semibold">{stat.value}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-500">数据截至 2026 年 04 月</p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] bg-slate-900/40 p-6 shadow-2xl shadow-slate-950/30 ring-1 ring-white/10 sm:p-8 flex flex-col justify-center">
            <img src="/images/posterimg_2x_20_2_.png" alt="Hero illustration" className="h-auto w-full rounded-[1.75rem] object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-slate-100 text-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10 lg:py-16">
          <div className="grid gap-4 sm:grid-cols-3">
            {platforms.map((platform) => (
              <div key={platform.label} className="flex items-center gap-4 rounded-3xl bg-white p-5 shadow-lg shadow-slate-900/5">
                <img src={platform.src} alt={platform.label} className="h-12 w-12 shrink-0" />
                <p className="text-base font-medium">{platform.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="px-6 pb-16 pt-14 sm:px-8 lg:px-10 lg:pb-24">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-400">我们的优势</p>
            <h2 className="text-4xl font-semibold text-white sm:text-5xl">更快的接入，更高的收益！</h2>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              更高的收益，聚合最优质广告平台，保证高价值广告与素材的合规性。12 亿活跃用户数据还原请求真实画像，个性化精准匹配最优广告。
            </p>
            <ul className="space-y-4 text-slate-300">
              <li>串行、并行、串并结合的实时动态优化算法，自动调整广告优先级。</li>
              <li>追求规模而不追求利润，诚心帮助开发者赚钱。</li>
            </ul>
          </div>
          <div className="relative rounded-[2rem] bg-slate-950/90 p-6 shadow-2xl shadow-slate-950/20 ring-1 ring-white/10 sm:p-8">
            <img src="/images/iPhone_20XS_20Longscroll_2x.png" alt="App monetization screenshot" className="w-full rounded-[1.5rem] object-cover" />
          </div>
        </div>
      </section>

      <section id="ad-formats" className="bg-slate-100 px-6 pb-16 pt-16 sm:px-8 lg:px-10 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-500">丰富的广告形式</p>
            <h2 className="text-4xl font-semibold text-slate-950 sm:text-5xl">全平台变现，更多收益</h2>
            <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600">
              liangdian 提供开屏、信息流、激励视频、全屏视频、插屏和悬浮广告，覆盖多种场景和变现策略。
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="grid gap-4 sm:grid-cols-2">
              {adFormats.map((format) => (
                <div key={format.title} className="rounded-3xl bg-white p-6 shadow-lg shadow-slate-900/5">
                  <div className="flex items-center gap-4">
                    <img src={format.image} alt={format.title} className="h-14 w-14 rounded-3xl bg-slate-50 p-3" />
                    <h3 className="text-xl font-semibold text-slate-950">{format.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{format.description}</p>
                </div>
              ))}
            </div>
            <div className="rounded-[2rem] bg-gradient-to-br from-slate-950 to-slate-900 p-6 text-white shadow-2xl shadow-slate-950/25">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.22em] text-sky-400">广告场景</p>
                <h3 className="text-3xl font-semibold">全屏沉浸式展示与灵活嵌入</h3>
                <p className="text-slate-300">
                  通过广告形式与内容紧密结合，实现更高的转化与用户体验。支持多媒体、短视频、内嵌、悬浮等多场景投放。
                </p>
              </div>
              <img src="/images/posterimg_2x_20_1_.png" alt="Ad illustration" className="mt-8 w-full rounded-[1.5rem] object-cover w-500px" />
            </div>
          </div>
        </div>
      </section>

      <section id="scenes" className="px-6 pb-16 pt-16 sm:px-8 lg:px-10 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-500">场景变现</p>
            <h2 className="text-4xl font-semibold text-slate-950 sm:text-5xl text-white">更丰富的广告形式，更多收入场景</h2>
            <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600">
              liangdian 支持短视频、新闻资讯、电商、电子书等内容变现方式，快速接入即可开始收益。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {sceneCards.map((card) => (
              <div key={card.title} className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm shadow-slate-900/5">
                <img src={card.image} alt={card.title} className="mb-5 h-40 w-full rounded-3xl object-cover" />
                <h3 className="text-xl font-semibold text-slate-950">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{card.description}</p>
                <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sky-600 transition hover:text-sky-500">
                  查看详情 <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="security" className="bg-slate-100 px-6 pb-16 pt-16 sm:px-8 lg:px-10 lg:pb-24">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-500">安全防刷</p>
            <h2 className="text-4xl font-semibold text-slate-950 sm:text-5xl">云端一体安全网络</h2>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              激励视频经常被刷，让开发者遭受损失，liangdian 提供云端一体安全防刷方案，拒绝灰黑产、安心做业务。
            </p>
            <ul className="space-y-4 text-slate-600">
              <li>防止客户端伪造</li>
              <li>防止证书重签</li>
              <li>防止抓包破解</li>
              <li>防止网络劫持</li>
              <li>防止 root 设备和模拟器</li>
            </ul>
          </div>
          <div className="rounded-[2rem] bg-white p-6 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-200/80">
            <img src="/images/secure_2x.png" alt="Security illustration" className="w-full rounded-[1.5rem] object-cover" />
          </div>
        </div>
      </section>

      <section id="benefits" className="px-6 pb-16 pt-16 sm:px-8 lg:px-10 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 space-y-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-500">降低成本</p>
            <h2 className="text-4xl font-semibold text-slate-950 sm:text-5xl text-white">更低成本，更稳收益</h2>
            <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600">
              从开发到运维，再到结算，liangdian 帮助开发者从多维度降低成本，提高收益效率。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {benefits.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm shadow-slate-900/5">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-100">
                  <img src={item.image} alt={item.title} className="h-10 w-10 object-contain" />
                </div>
                <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="partnership" className="bg-slate-950 px-6 pb-16 pt-16 text-slate-100 sm:px-8 lg:px-10 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-400">代理合作</p>
              <h2 className="text-4xl font-semibold text-white sm:text-5xl">LiangDian 授权广告代理服务商</h2>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                上海优蓍信息技术有限公司 有效期至 2026 年 4 月 25 日。开发者请注意商业变现合作请核实是否为官方授权广告代理。
              </p>
              <div className="flex flex-wrap gap-4">
                {partnerLogos.map((logo) => (
                  <div key={logo.alt} className="flex items-center gap-3 rounded-3xl bg-slate-900/80 p-4 shadow-xl shadow-slate-950/20">
                    <img src={logo.src} alt={logo.alt} className="h-10 w-10 rounded-2xl object-cover" />
                    <span>{logo.alt}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] bg-white p-8 text-slate-950 shadow-2xl shadow-slate-950/10 ring-1 ring-slate-200/80">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-500">品牌背书</p>
              <p className="mt-3 text-lg leading-8">
                依托 LiangDian 生态，直接为开发者提供专业的变现服务。我们利用现有 12 亿活跃用户数据和多年技术沉淀，不断升级广告优化策略。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 pb-24 pt-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="rounded-[2rem] bg-slate-950 p-8 text-slate-100 shadow-2xl shadow-slate-950/20 ring-1 ring-white/10">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-400">联系我们</p>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">立即获取变现咨询与合作支持</h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              如需流量变现、投放广告、代理合作或其他合作需求，请填写下面信息，我们将快速响应。
            </p>
            <form className="mt-8 space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-slate-300">
                  姓名
                  <input className="w-full rounded-3xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-white outline-none focus:border-sky-400" type="text" placeholder="请输入姓名" />
                </label>
                <label className="space-y-2 text-sm text-slate-300">
                  电话
                  <input className="w-full rounded-3xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-white outline-none focus:border-sky-400" type="text" placeholder="请输入电话" />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-slate-300">
                  公司
                  <input className="w-full rounded-3xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-white outline-none focus:border-sky-400" type="text" placeholder="请输入公司" />
                </label>
                <label className="space-y-2 text-sm text-slate-300">
                  邮箱
                  <input className="w-full rounded-3xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-white outline-none focus:border-sky-400" type="email" placeholder="请输入邮箱" />
                </label>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {['流量变现', '投放广告', '其他合作'].map((label) => (
                  <label key={label} className="flex items-center gap-3 rounded-3xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-slate-300 transition hover:border-sky-400">
                    <input type="radio" name="need" className="h-4 w-4 accent-sky-400" />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
              <label className="space-y-2 text-sm text-slate-300">
                说明
                <input className="w-full rounded-3xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-white outline-none focus:border-sky-400" type="text" placeholder="请输入您的需求说明" />
              </label>
              <Button className="w-full rounded-3xl bg-sky-500 px-6 py-3 text-base font-semibold text-white hover:bg-sky-400">
                提 交
              </Button>
            </form>
          </div>

          <div className="space-y-8 rounded-[2rem] bg-white p-8 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-200/80">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-500">立即扫码联系我们</p>
              <p className="text-3xl font-semibold text-slate-950">变现咨询</p>
              <p className="text-sm leading-7 text-slate-600">扫一扫添加商务与您直接联系，获取一对一专属服务。</p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6">
              <img src="/images/zey1103.png" alt="扫码联系我们" className="mx-auto h-64 w-64 rounded-3xl object-cover" />
              <div className="mt-6 space-y-3 text-center text-sm text-slate-500">
                <p>变现咨询</p>
                <p>扫一扫添加商务与您直接联系</p>
              </div>
            </div>
            <div className="rounded-3xl bg-slate-950 p-5 text-slate-100">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-400">联系方式</p>
              <a href="mailto:ad@liangdian.io" className="mt-3 block text-base text-white hover:text-sky-300">
                ad@liangdian.io
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-6 right-6 z-50 hidden h-fit rounded-full bg-slate-950/95 px-5 py-3 shadow-2xl shadow-slate-950/40 ring-1 ring-white/10 md:flex md:items-center md:gap-3">
        <img src="/images/uniAD-logo.png" alt="uniAD" className="h-10 w-10 rounded-full bg-white/5 p-2" />
        <span className="text-sm text-slate-100">点击扫码咨询获取更高收益</span>
      </div>

      <footer className="bg-slate-950 px-6 pb-8 pt-12 text-slate-400 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl space-y-4 text-sm leading-6">
          <p>©2026 深圳智维格网络信息科技有限公司 版权所有</p>
        </div>
      </footer>
    </main>
  );
}
