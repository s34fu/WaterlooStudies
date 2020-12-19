<script>
import { Pie, mixins } from 'vue-chartjs';
const { reactiveProp } = mixins;
export default {
	extends: Pie,
	name: 'PieChart',
	mixins: [reactiveProp],
	props: {
		chartData: {
			type: Object,
			default: null
		},
		chartTitle: {
			type: String,
			default: 'default title'
		},
		chartOptions: {
			type: Object,
			default: null
		}
	},
	data() {
		return {
			data: this.chartData,
			options:
				this.chartOptions == null
					? {
						responsive: true,
						maintainAspectRatio: false,
						title: { display: true, text: this.chartTitle }
					}
					: this.chartOptions
		};
	},
	mounted() {
		this.renderChart(this.chartData, this.options);
	}
};
</script>
