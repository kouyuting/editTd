<div>
	<div ng-show="!fack.editActive" ng-dblclick="fack.editActive = !fack.editActive; tmp=fack.data;" style="min-height:10px">{{fack.data.name || fack.data}}</div>
	<div ng-show="fack.editActive">

		<div ng-if="type === 'input'">
			<input ng-model="fack.data" / >
		</div>

		<div ng-if="type === 'date'">
			<div ng-controller="DatepickerDemoCtrl" class="inner-td-datepicker-contanier">
	          	<input type="text" datepicker-popup="{{format}}" ng-model="fack.data" is-open="opened" datepicker-options="dateOptions" ng-required="true" close-text="Close" />
	          	<span class="input-group-btn">
	            	<button type="button" class="btn btn-default" ng-click="open($event)"><i class="icon-calendar"></i></button>
	          	</span>
	    	</div>
	    </div>

		<div ng-if="type === 'select'">
			<ui-select ng-model="fack.data" theme="bootstrap">
	            <ui-select-match>{{$select.selected.name || $select.selected}}</ui-select-match>
				<ui-select-choices repeat="item in selectOptions| filter: $select.search">
					<span ng-if="item.name !== undefined">
						<div ng-bind-html="item.name | highlight: $select.search"></div>
					</span>
					<span ng-if="item.name === undefined">
						<div ng-bind-html="item | highlight: $select.search"></div>
					</span>
	            </ui-select-choices>
	        </ui-select>
		</div>

		<div class="edittable-btn">
			<button class="btn btn-primary btn-xs" ng-click="save()">
				保存
			</button>
			<button class="btn btn-warning btn-xs" ng-click="fack.data = tmp; fack.editActive = false;">
				取消
			</button>
		</div>
	</div>
</div>
