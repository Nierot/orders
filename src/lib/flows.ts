export enum OrderFlows {
	// Voorpagina
	Home = 'home',
	// 1 pagina met gewoon tekst
	Notes = 'notes',
	ShoppingList = 'shopping-list',
	Reminders = 'reminders',
	Settings = 'settings',
	Parties = 'parties',
	Calendar = 'calendar',

	// Reguliere bestelling
	ProductCount = 'product-count',
	SpecialProductCount = 'special-product-count',
	DepositCount = 'deposit-count',
	OrderFase = 'order-fase',
	RegularReminder = 'reminder',
	Final = 'final',

	// Na de levering
	AfterDelivery = 'after-delivery',
	AfterDeliveryLink = 'after-delivery-link',
	AfterDeliveryReminder = 'after-delivery-reminder',

	// Speciale bestelling (losse drank, makro)
	SpecialOrder = 'special-order',
	SpecialOrderLink = 'special-order-link',
	SpecialOrderReminder = 'special-order-reminder',

	// Retour
	ReturnOrder = 'return-order',
	ReturnOrderLink = 'return-order-link'
}
