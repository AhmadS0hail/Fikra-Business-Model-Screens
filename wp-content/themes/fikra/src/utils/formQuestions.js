export const projectDomains = [
	"التقنية",
	"الذكاء الاصطناعي",
	"التجارة الإلكترونية",
	"الصناعة",
	"الصحة",
	"الأدوية",
	"السياحة",
	"الأزياء",
	"التجميل",
	"أخرى",
];




export const formTwoQuestions = [
	{
		id: "projectType",
		type: "Multiple",
		options: [
			{ value: "مشروع ريادي", id: "F2Q1O1" },
			{ value: "مشروع غير ربجي", id: "F2Q1O2" },
			{ value: "ريادة مجتمعية", id: "F2Q1O3" },
		],
		heading: "نوع المشروع *",
		subHeading: "يرجى الاختيار",
		description: null,
	},
	{
		id: "targetGroup",
		type: "Multiple",
		options: [
			{ value: "B2C", id: "F2Q2O1" },
			{ value: "B2B", id: "F2Q2O2" },
			{ value: "B2B2C", id: "F2Q2O3" },
			{ value: "B2B2C", id: "F2Q2O4" },
			{ value: "P2P Group", id: "F2Q2O5" },
			{ value: "Peer-to-Peer", id: "F2Q2O6" },
		],
		heading: "الفئة الرئيسية المستهدفة *",
		subHeading: "يرجى الاختيار",
		description:
			'B2C هي اختصار لـ "الأعمال التجارية بين الشركات والمستهلكين."' + ' B2B اختصار لـ "الأعمال التجارية بين الشركات."',
	},
	{
		id: "customerSegments",
		type: "Multiple",
		options: [
			{ value: "مستخدمي الإنترنت", id: "F2Q3O1" },
			{ value: "مستخدمي التطبيقات", id: "F2Q3O2" },
			{ value: "الوالدين", id: "F2Q3O3" },
			{ value: "طلاب و طالبات", id: "F2Q3O4" },
			{ value: "الموظفون", id: "F2Q3O5" },
			{ value: "المتاجر الالكترونية", id: "F2Q3O6" },
			{ value: "رواد ورائدات الأعمال", id: "F2Q3O7" },
			{ value: "اصحاب المهارات", id: "F2Q3O8" },
			{ value: "كافة الاشخاص", id: "F2Q3O9" },
			{ value: "الشركات الصغيرة والمتوسطة", id: "F2Q3O10" },
			{ value: "المؤسسات التعليمية", id: "F2Q3O11" },
			{ value: "وكالات التسويق", id: "F2Q3O12" },
			{ value: "شركات الأبحاث", id: "F2Q3O13" },
			{ value: "المبرمجين", id: "F2Q3O14" },
			{ value: "أفراد", id: "F2Q3O15" },
		],
		heading: "شرائح العملاء *",
		subHeading: "يرجى الاختيار",
		description: null,
	},
	{
		id: "providedValue",
		type: "Multiple",
		options: [
			{ value: "منصة  رقمية", id: "F2Q4O1" },
			{ value: "تطبيق", id: "F2Q4O3" },
			{ value: "موقع الكتروني", id: "F2Q4O4" },
			{ value: "تسهيلات الدفع", id: "F2Q4O5" },
			{ value: "منتج رئيسي مجاني", id: "F2Q4O6" },
			{ value: "خدمات لوجيستية", id: "F2Q4O7" },
			{ value: "حلول رقمية", id: "F2Q4O8" },
			{ value: "تقنيات مبتكرة", id: "F2Q4O9" },
			{ value: "ذكاء اصطناعي", id: "F2Q4O10" },
			{ value: "باقات منوعة", id: "F2Q4O11" },
			{ value: "خصومات", id: "F2Q4O12" },
			{ value: "فعاليات وانششطة", id: "F2Q4O13" },
			{ value: "منتجات حسب رغبة العميل", id: "F2Q4O14" },
			{ value: "تنوع الخدمات", id: "F2Q4O15" },
			{ value: "منتجات منوعة", id: "F2Q4O2" },
			{ value: "سهولة حصول العميل على الخدمة", id: "F2Q4O16" },
		],
		heading: "القيمة المقدمة *",
		subHeading: "يرجى الاختيار",
		description: null,
	},
	{
		id: "channels",
		type: "Multiple",
		options: [
			{ value: "تطبيق", id: "F2Q5O1" },
			{ value: "وسائل التواصل الاجتماعي", id: "F2Q5O2" },
			{ value: "الرد الالي", id: "F2Q5O3" },
			{ value: "الرقم لمجاني", id: "F2Q5O4" },
			{ value: "البريد الالكتروني", id: "F2Q5O5" },
			{ value: "الموقع لالكتروني", id: "F2Q5O6" },
			{ value: "مقر المشروع", id: "F2Q5O7" },
		],
		heading: "القنوات *",
		subHeading: "يرجى الاختيار",
		description: null,
	},
];

export const formThreeQuestions = [
	{
		id: "clientsRelationship",
		type: "Multiple",
		options: [
			{ value: "خدماات العملاء", id: "F3Q1O1" },
			{ value: "برامج الولاء", id: "F3Q1O2" },
			{ value: "عياناات مجاانية", id: "F3Q1O3" },
			{ value: "تجربة مجانية", id: "F3Q1O4" },
			{ value: "الدعم والصيانة", id: "F3Q1O5" },
			{ value: "التواصل المستمر مع العميل", id: "F3Q1O6" },
		],
		heading: "العلاقة مع العملاء *",
		subHeading: "يرجى الاختيار",
		description: null,
	},
	{
		id: "mainActivities",
		type: "Multiple",
		options: [
			{ value: "تطوير مستمر", id: "F3Q2O1" },
			{ value: "حلول رقمية", id: "F3Q2O2" },
			{ value: "سرعة تنفيذ الخدمة", id: "F3Q2O3" },
			{ value: "اللوجستيك", id: "F3Q2O4" },
			{ value: "خدمات ما بعد البيع", id: "F3Q2O5" },
			{ value: "خيارات متنوعة للخدمة", id: "F3Q2O6" },
			{ value: "تكامل الخدمات والمنتجات", id: "F3Q2O7" },
			{ value: "التغليف", id: "F3Q2O8" },
			{ value: "التخزين", id: "F3Q2O9" },
		],
		heading: "الانشطة الررئيسية *",
		subHeading: "يرجى الاختيار",
		description: null,
	},
	{
		id: "mainResources",
		type: "Multiple",
		options: [
			{ value: "موارد تقنية", id: "F3Q3O1" },
			{ value: "موارد بشرية", id: "F3Q3O2" },
			{ value: "موارد ادارية", id: "F3Q3O3" },
			{ value: "موارد تسويقية", id: "F3Q3O4" },
			{ value: "موارد تأاسيسية", id: "F3Q3O5" },
			{ value: "موارد تدريبية", id: "F3Q3O6" },
			{ value: "موارد مالية", id: "F3Q3O7" },
			{ value: "محاسبية", id: "F3Q3O8" },
		],
		heading: "الموارد الرئيسية *",
		subHeading: "يرجى الاختيار",
		description: null,
	},
	{
		id: "mainPartners",
		type: "Multiple",
		options: [
			{ value: "موردون", id: "F3Q4O1" },
			{ value: "مزودين الخدمات", id: "F3Q4O3" },
			{ value: "رعاة", id: "F3Q4O4" },
			{ value: "شركات استراتيجيية ذات علاقة", id: "F3Q4O5" },
			{ value: "جهات حكومية", id: "F3Q4O6" },
			{ value: "مستثمرين", id: "F3Q4O7" },
			{ value: "مؤثرين ", id: "F3Q4O8" },
			{ value: "ملهمين", id: "F3Q4O9" },
			{ value: "جهات  الخاصة", id: "F3Q4O10" },
		],
		heading: "الشراكات الرئيسية *",
		subHeading: "يرجى الاختيار",
		description: null,
	},
	{
		id: "incomeSources",
		type: "Multiple",
		options: [
			{ value: "المنتج الرئيسي", id: "F3Q5O1" },
			{ value: "الخدمة الرئيسية", id: "F3Q5O2" },
			{ value: "منتجات مرتبطة بالمنتج الرئيسي أو الخدمة", id: "F3Q5O3" },
			{ value: "صيانة", id: "F3Q5O4" },
			{ value: "خدمات اضافية", id: "F3Q5O5" },
			{ value: "اشترااكات", id: "F3Q5O6" },
			{ value: "باقات", id: "F3Q5O7" },
			{ value: "تسهيلات دفع", id: "F3Q5O8" },
		],
		heading: "مصادر الايرادات *",
		subHeading: "يرجى الاختيار",
		description: null,
	},
	{
		id: "expensesStructure",
		type: "Multiple",
		options: [
			{ value: "تكيف تأاسيسية", id: "F3Q6O1" },
			{ value: "تكليف تطوير", id: "F3Q6O2" },
			{ value: "تكاليف تقنية", id: "F3Q6O3" },
			{ value: "قانونية", id: "F3Q6O4" },
			{ value: "تسويقية", id: "F3Q6O5" },
			{ value: "تكاليف  تشغيلية", id: "F3Q6O6" },
			{ value: "تكاليف االصيانة", id: "F3Q6O7" },
		],
		heading: "هيكل التكاليف *",
		subHeading: "يرجى الاختيار",
		description: null,
	},
];
