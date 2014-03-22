BasketCalculator = function(precision) {
	var total = 0;
	var decimals = precision || 1;

	var sanitize = function(amount) {
		if(!amount || isNaN(amount))
		{
			return 0;
		}
		return amount;
	};

	return {
		add: function (amount) {
			total = parseFloat((total + sanitize(amount)).toFixed(decimals));
			return total;
		},
		remove: function (amount) {
			total = parseFloat((total - sanitize(amount)).toFixed(decimals));
			return total;
		}
	};
};