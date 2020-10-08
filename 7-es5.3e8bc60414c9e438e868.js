!function(){function b(b,t){if(!(b instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{CfhG:function(t,e,c){"use strict";c.r(e),c.d(e,"DocumentationModule",(function(){return s}));var n,m,a=c("2kYt"),o=c("sEIs"),d=c("PCNd"),N=c("EM62"),M=c("aZ8m"),r=[{path:"",component:(n=function t(){b(this,t)},n.\u0275fac=function(b){return new(b||n)},n.\u0275cmp=N.Cb({type:n,selectors:[["demo"]],decls:1398,vars:16,consts:[["tagline","Documentation"],[1,"main-content"],["id","documentation","href","#documentation","aria-hidden","true",1,"anchor"],["aria-hidden","true",1,"octicon","octicon-link"],["id","inputs","href","#configuration","aria-hidden","true",1,"anchor"],[1,"highlight"],["id","configuration","href","#configuration","aria-hidden","true",1,"anchor"],[1,"section"],["href","https://github.com/akveo/ng2-smart-table/blob/master/src/app/pages/examples/custom-edit-view/advanced-example-custom-editor.component.ts",1,"source"],[1,"nested-obj"],["href","https://github.com/akveo/ng2-smart-table/blob/master/src/app/pages/examples/filter/advanced-example-filters.component.ts",1,"source"],["id","events","href","#events","aria-hidden","true",1,"anchor"],["id","source-method","href","#source-method","aria-hidden","true",1,"anchor"],[1,"string"]],template:function(b,t){if(1&b){N.Jb(0,"header-component",0),N.Nb(1,"section",1),N.Nb(2,"h2"),N.Nb(3,"a",2),N.Jb(4,"span",3),N.Mb(),N.mc(5,"Documentation"),N.Mb(),N.Nb(6,"h3"),N.Nb(7,"a",4),N.Jb(8,"span",3),N.Mb(),N.mc(9,"Component Inputs"),N.Mb(),N.Nb(10,"table"),N.Nb(11,"tr"),N.Nb(12,"th"),N.mc(13,"Input"),N.Mb(),N.Nb(14,"th"),N.mc(15,"Type"),N.Mb(),N.Nb(16,"th"),N.mc(17,"Description"),N.Mb(),N.Mb(),N.Nb(18,"tr"),N.Nb(19,"td"),N.mc(20,"[settings]"),N.Mb(),N.Nb(21,"td"),N.Nb(22,"span",5),N.mc(23,"Object"),N.Mb(),N.Mb(),N.Nb(24,"td"),N.mc(25,"Table component configuration object, properties described below"),N.Mb(),N.Mb(),N.Nb(26,"tr"),N.Nb(27,"td"),N.mc(28,"[source]"),N.Mb(),N.Nb(29,"td"),N.Nb(30,"span",5),N.mc(31,"Array"),N.Mb(),N.mc(32,"|"),N.Nb(33,"span",5),N.mc(34,"DataSource"),N.Mb(),N.Mb(),N.Nb(35,"td"),N.mc(36,"Table data, either an array or DataSource object (LocalDataSource currently supported)"),N.Mb(),N.Mb(),N.Mb(),N.Nb(37,"h3"),N.Nb(38,"a",6),N.Jb(39,"span",3),N.Mb(),N.mc(40,"Table Configuration"),N.Mb(),N.Nb(41,"table"),N.Nb(42,"tr"),N.Nb(43,"th"),N.mc(44,"Property"),N.Mb(),N.Nb(45,"th"),N.mc(46,"Type"),N.Mb(),N.Nb(47,"th"),N.mc(48,"Default"),N.Mb(),N.Nb(49,"th"),N.mc(50,"Description"),N.Mb(),N.Mb(),N.Nb(51,"tr",7),N.Nb(52,"td"),N.mc(53,"Required Table Settings"),N.Mb(),N.Jb(54,"td"),N.Jb(55,"td"),N.Jb(56,"td"),N.Mb(),N.Nb(57,"tr"),N.Nb(58,"td"),N.mc(59,"columns"),N.Mb(),N.Nb(60,"td"),N.Nb(61,"span",5),N.mc(62,"Object"),N.Mb(),N.Mb(),N.Nb(63,"td"),N.mc(64,"n/a"),N.Mb(),N.Nb(65,"td"),N.mc(66," Table column settings, by default an empty object."),N.Jb(67,"br"),N.mc(68," Example format:"),N.Jb(69,"br"),N.Nb(70,"code"),N.mc(71),N.Nb(72,"b"),N.mc(73,"columnKey"),N.Mb(),N.mc(74),N.Mb(),N.Jb(75,"br"),N.mc(76," Please note, "),N.Nb(77,"b"),N.mc(78,"columnKey"),N.Mb(),N.mc(79," must be the same as a key in data array objects. "),N.Mb(),N.Mb(),N.Nb(80,"tr",7),N.Nb(81,"td"),N.mc(82,"Column Settings"),N.Mb(),N.Jb(83,"td"),N.Jb(84,"td"),N.Nb(85,"td"),N.mc(86," List of a column's settings "),N.Mb(),N.Mb(),N.Nb(87,"tr"),N.Nb(88,"td"),N.mc(89,"title"),N.Mb(),N.Nb(90,"td"),N.Nb(91,"span",5),N.mc(92,"string"),N.Mb(),N.Mb(),N.Nb(93,"td"),N.mc(94,"''"),N.Mb(),N.Nb(95,"td"),N.mc(96," Column title "),N.Mb(),N.Mb(),N.Nb(97,"tr"),N.Nb(98,"td"),N.mc(99,"class"),N.Mb(),N.Nb(100,"td"),N.Nb(101,"span",5),N.mc(102,"string"),N.Mb(),N.Mb(),N.Nb(103,"td"),N.mc(104,"''"),N.Mb(),N.Nb(105,"td"),N.mc(106," Column class "),N.Mb(),N.Mb(),N.Nb(107,"tr"),N.Nb(108,"td"),N.mc(109,"width"),N.Mb(),N.Nb(110,"td"),N.Nb(111,"span",5),N.mc(112,"string"),N.Mb(),N.Mb(),N.Nb(113,"td"),N.mc(114,"''"),N.Mb(),N.Nb(115,"td"),N.mc(116," Column width, example: "),N.Nb(117,"span",5),N.mc(118,"'20px'"),N.Mb(),N.mc(119,", "),N.Nb(120,"span",5),N.mc(121,"'20%'"),N.Mb(),N.Mb(),N.Mb(),N.Nb(122,"tr"),N.Nb(123,"td"),N.mc(124,"editable"),N.Mb(),N.Nb(125,"td"),N.Nb(126,"span",5),N.mc(127,"boolean"),N.Mb(),N.Mb(),N.Nb(128,"td"),N.mc(129,"true"),N.Mb(),N.Nb(130,"td"),N.mc(131," Whether this column is editable or not "),N.Mb(),N.Mb(),N.Nb(132,"tr"),N.Nb(133,"td"),N.mc(134,"type"),N.Mb(),N.Nb(135,"td"),N.Nb(136,"span",5),N.mc(137,"'text'"),N.Mb(),N.mc(138,"|"),N.Nb(139,"span",5),N.mc(140,"'html'"),N.Mb(),N.mc(141,"|"),N.Nb(142,"span",5),N.mc(143,"'custom'"),N.Mb(),N.Mb(),N.Nb(144,"td"),N.mc(145,"'text'"),N.Mb(),N.Nb(146,"td"),N.mc(147," If type is "),N.Nb(148,"span",5),N.mc(149,"text"),N.Mb(),N.mc(150," then cell value will be inserted as text."),N.Jb(151,"br"),N.mc(152," If type is "),N.Nb(153,"span",5),N.mc(154,"html"),N.Mb(),N.mc(155," then cell value will be inserted as html."),N.Jb(156,"br"),N.mc(157," If type is "),N.Nb(158,"span",5),N.mc(159,"custom"),N.Mb(),N.mc(160," the "),N.Nb(161,"code"),N.mc(162,"renderComponent"),N.Mb(),N.mc(163," property must be defined. "),N.Mb(),N.Mb(),N.Nb(164,"tr"),N.Nb(165,"td"),N.mc(166,"renderComponent"),N.Mb(),N.Nb(167,"td"),N.Nb(168,"span",5),N.mc(169,"any"),N.Mb(),N.Mb(),N.Nb(170,"td"),N.mc(171,"null"),N.Mb(),N.Nb(172,"td"),N.mc(173," Custom component that will be responsible for rendering the cell content while in view mode."),N.Jb(174,"br"),N.mc(175," Type must be "),N.Nb(176,"span",5),N.mc(177,"custom"),N.Mb(),N.mc(178," in order for this to work."),N.Jb(179,"br"),N.mc(180," You can see an "),N.Nb(181,"a",8),N.mc(182,"example here"),N.Mb(),N.Mb(),N.Mb(),N.Nb(183,"tr"),N.Nb(184,"td"),N.mc(185,"onComponentInitFunction"),N.Mb(),N.Nb(186,"td"),N.Nb(187,"span",5),N.mc(188,"Function"),N.Mb(),N.Mb(),N.Nb(189,"td"),N.mc(190,"null"),N.Mb(),N.Nb(191,"td"),N.mc(192," Function which will be invoked after "),N.Nb(193,"span",5),N.mc(194,"renderComponent"),N.Mb(),N.mc(195," instantiated and before ngOnInit hook. This function gets "),N.Nb(196,"span",5),N.mc(197,"renderComponent"),N.Mb(),N.mc(198," instance in first param. "),N.Mb(),N.Mb(),N.Nb(199,"tr"),N.Nb(200,"td"),N.mc(201,"editor"),N.Mb(),N.Nb(202,"td"),N.Nb(203,"span",5),N.mc(204,"Object"),N.Mb(),N.Mb(),N.Nb(205,"td"),N.mc(206,"n/a"),N.Mb(),N.Nb(207,"td"),N.mc(208," Editor attributes settings "),N.Mb(),N.Mb(),N.Nb(209,"tr"),N.Nb(210,"td"),N.Nb(211,"span",9),N.mc(212,"editor"),N.Mb(),N.mc(213,".type"),N.Mb(),N.Nb(214,"td"),N.Nb(215,"span",5),N.mc(216,"'text' | 'textarea' | 'completer' | 'list' | 'checkbox'"),N.Mb(),N.Mb(),N.Nb(217,"td"),N.mc(218,"'text'"),N.Mb(),N.Nb(219,"td"),N.mc(220," Editor used when new row is added or edited "),N.Mb(),N.Mb(),N.Nb(221,"tr"),N.Nb(222,"td"),N.Nb(223,"span",9),N.mc(224,"editor"),N.Mb(),N.mc(225,".config"),N.Mb(),N.Nb(226,"td"),N.Nb(227,"span",5),N.mc(228,"Object"),N.Mb(),N.Mb(),N.Nb(229,"td"),N.mc(230,"n/a"),N.Mb(),N.Nb(231,"td"),N.mc(232," Editor configuration settings. Mandatory only for editor types "),N.Nb(233,"span",5),N.mc(234,"completer"),N.Mb(),N.mc(235,", "),N.Nb(236,"span",5),N.mc(237,"list"),N.Mb(),N.Mb(),N.Mb(),N.Nb(238,"tr"),N.Nb(239,"td"),N.Nb(240,"span",9),N.mc(241,"editor.config"),N.Mb(),N.mc(242,".true"),N.Mb(),N.Nb(243,"td"),N.Nb(244,"span",5),N.mc(245,"string"),N.Mb(),N.Mb(),N.Nb(246,"td"),N.mc(247,"''"),N.Mb(),N.Nb(248,"td"),N.mc(249," Only on "),N.Nb(250,"span",5),N.mc(251,"checkbox"),N.Mb(),N.mc(252," type."),N.Jb(253,"br"),N.mc(254," Defines the value to assign when the checkbox is checked. This parameter is optional, if omitted, "),N.Nb(255,"code"),N.mc(256,"true"),N.Mb(),N.mc(257," will be used. "),N.Mb(),N.Mb(),N.Nb(258,"tr"),N.Nb(259,"td"),N.Nb(260,"span",9),N.mc(261,"editor.config"),N.Mb(),N.mc(262,".false"),N.Mb(),N.Nb(263,"td"),N.Nb(264,"span",5),N.mc(265,"string"),N.Mb(),N.Mb(),N.Nb(266,"td"),N.mc(267,"''"),N.Mb(),N.Nb(268,"td"),N.mc(269," Only on "),N.Nb(270,"span",5),N.mc(271,"checkbox"),N.Mb(),N.mc(272," type."),N.Jb(273,"br"),N.mc(274," Defines the value to assign when the checkbox is not checked. This parameter is optional, if omitted, "),N.Nb(275,"code"),N.mc(276,"false"),N.Mb(),N.mc(277," will be used. "),N.Mb(),N.Mb(),N.Nb(278,"tr"),N.Nb(279,"td"),N.Nb(280,"span",9),N.mc(281,"editor.config"),N.Mb(),N.mc(282,".list"),N.Mb(),N.Nb(283,"td"),N.Nb(284,"span",5),N.mc(285,"Array"),N.Mb(),N.Mb(),N.Nb(286,"td"),N.mc(287,"[ ]"),N.Mb(),N.Nb(288,"td"),N.mc(289," Only on "),N.Nb(290,"span",5),N.mc(291,"list"),N.Mb(),N.mc(292," type. Example format:"),N.Jb(293,"br"),N.Nb(294,"code"),N.mc(295),N.Mb(),N.Jb(296,"br"),N.mc(297," Html is supported if column type is "),N.Nb(298,"span",5),N.mc(299,"'html'"),N.Mb(),N.Mb(),N.Mb(),N.Nb(300,"tr"),N.Nb(301,"td"),N.Nb(302,"span",9),N.mc(303,"editor.config"),N.Mb(),N.mc(304,".completer"),N.Mb(),N.Nb(305,"td"),N.Nb(306,"span",5),N.mc(307,"Object"),N.Mb(),N.Mb(),N.Nb(308,"td"),N.mc(309,"n/a"),N.Mb(),N.Nb(310,"td"),N.mc(311," Only on "),N.Nb(312,"span",5),N.mc(313,"completer"),N.Mb(),N.mc(314," type. Example format:"),N.Jb(315,"br"),N.mc(316," Completer configuration settings "),N.Mb(),N.Mb(),N.Nb(317,"tr"),N.Nb(318,"td"),N.Nb(319,"span",9),N.mc(320,"editor.config.completer"),N.Mb(),N.mc(321,".data"),N.Mb(),N.Nb(322,"td"),N.Nb(323,"span",5),N.mc(324,"Array"),N.Mb(),N.Mb(),N.Nb(325,"td"),N.mc(326,"[ ]"),N.Mb(),N.Nb(327,"td"),N.mc(328," Autocomplete list data source."),N.Jb(329,"br"),N.mc(330," Example format:"),N.Jb(331,"br"),N.Nb(332,"code"),N.mc(333),N.Mb(),N.Mb(),N.Mb(),N.Nb(334,"tr"),N.Nb(335,"td"),N.Nb(336,"span",9),N.mc(337,"editor.config.completer"),N.Mb(),N.mc(338,".searchFields"),N.Mb(),N.Nb(339,"td"),N.Nb(340,"span",5),N.mc(341,"string"),N.Mb(),N.Mb(),N.Nb(342,"td"),N.mc(343,"''"),N.Mb(),N.Nb(344,"td"),N.mc(345," Comma separated list of fields to search on. Fields may contain dots for nested attributes; if empty or null all data will be returned "),N.Mb(),N.Mb(),N.Nb(346,"tr"),N.Nb(347,"td"),N.Nb(348,"span",9),N.mc(349,"editor.config.completer"),N.Mb(),N.mc(350,".titleField"),N.Mb(),N.Nb(351,"td"),N.Nb(352,"span",5),N.mc(353,"string"),N.Mb(),N.Mb(),N.Nb(354,"td"),N.mc(355,"''"),N.Mb(),N.Nb(356,"td"),N.mc(357," Name of the field to use as title for the list item "),N.Mb(),N.Mb(),N.Nb(358,"tr"),N.Nb(359,"td"),N.Nb(360,"span",9),N.mc(361,"editor.config.completer"),N.Mb(),N.mc(362,".descriptionField"),N.Mb(),N.Nb(363,"td"),N.Nb(364,"span",5),N.mc(365,"string"),N.Mb(),N.Mb(),N.Nb(366,"td"),N.mc(367,"''"),N.Mb(),N.Nb(368,"td"),N.mc(369," Name of the field to use as description for the list item "),N.Mb(),N.Mb(),N.Nb(370,"tr"),N.Nb(371,"td"),N.mc(372,"filter"),N.Mb(),N.Nb(373,"td"),N.Nb(374,"span",5),N.mc(375,"Object"),N.Mb(),N.Mb(),N.Nb(376,"td"),N.mc(377,"n/a"),N.Mb(),N.Nb(378,"td"),N.mc(379," Column filter attributes settings. This object accepts the same properties as the "),N.Nb(380,"code"),N.mc(381,"editor"),N.Mb(),N.mc(382," object."),N.Jb(383,"br"),N.mc(384," The available types are: "),N.Nb(385,"code"),N.mc(386,"checkbox"),N.Mb(),N.mc(387,", "),N.Nb(388,"code"),N.mc(389,"select"),N.Mb(),N.mc(390,", "),N.Nb(391,"code"),N.mc(392,"completer"),N.Mb(),N.mc(393,"."),N.Jb(394,"br"),N.mc(395," The "),N.Nb(396,"code"),N.mc(397,"checkbox"),N.Mb(),N.mc(398," type accepts one more optional property compared to the "),N.Nb(399,"code"),N.mc(400,"editor"),N.Mb(),N.mc(401," version: "),N.Nb(402,"span",5),N.mc(403,"resetText: string"),N.Mb(),N.mc(404,". It defines the text of the button to reset the checkbox selection."),N.Jb(405,"br"),N.Nb(406,"a",10),N.mc(407,"Click here to see an example"),N.Mb(),N.mc(408," on how to configure it. "),N.Mb(),N.Mb(),N.Nb(409,"tr"),N.Nb(410,"td"),N.mc(411,"valuePrepareFunction"),N.Mb(),N.Nb(412,"td"),N.Nb(413,"span",5),N.mc(414,"Function"),N.Mb(),N.Mb(),N.Nb(415,"td"),N.mc(416," n/a "),N.Mb(),N.Nb(417,"td"),N.mc(418," Function run against a value before it gets inserted into a cell. You can use it to modify how a value is displayed in the cell. "),N.Jb(419,"br"),N.mc(420," This function will be invoked with 2 parameters: cell, row "),N.Mb(),N.Mb(),N.Nb(421,"tr"),N.Nb(422,"td"),N.mc(423,"sort"),N.Mb(),N.Nb(424,"td"),N.Nb(425,"span",5),N.mc(426,"boolean"),N.Mb(),N.Mb(),N.Nb(427,"td"),N.mc(428,"true"),N.Mb(),N.Nb(429,"td"),N.mc(430," Column sort settings, enable/disable. "),N.Mb(),N.Mb(),N.Nb(431,"tr"),N.Nb(432,"td"),N.mc(433,"sortDirection"),N.Mb(),N.Nb(434,"td"),N.Nb(435,"span",5),N.mc(436,"'asc'|'desc'"),N.Mb(),N.Mb(),N.Nb(437,"td"),N.mc(438,"n/a"),N.Mb(),N.Nb(439,"td"),N.mc(440," Sort table by this column with this direction by default."),N.Jb(441,"br"),N.mc(442," Applied only when "),N.Nb(443,"span",5),N.mc(444,"sort"),N.Mb(),N.mc(445," = true. Note: multiple sort option is not supported yet, so sortDirection can be applied to only one column per table. "),N.Mb(),N.Mb(),N.Nb(446,"tr"),N.Nb(447,"td"),N.mc(448,"compareFunction"),N.Mb(),N.Nb(449,"td"),N.Nb(450,"span",5),N.mc(451,"Function"),N.Mb(),N.Mb(),N.Nb(452,"td"),N.mc(453," n/a "),N.Mb(),N.Nb(454,"td"),N.mc(455," Function run against the values to sort the table "),N.Mb(),N.Mb(),N.Nb(456,"tr"),N.Nb(457,"td"),N.mc(458,"filter"),N.Mb(),N.Nb(459,"td"),N.Nb(460,"span",5),N.mc(461,"boolean"),N.Mb(),N.Mb(),N.Nb(462,"td"),N.mc(463,"true"),N.Mb(),N.Nb(464,"td"),N.mc(465," Column filter settings, enable/disable "),N.Mb(),N.Mb(),N.Nb(466,"tr"),N.Nb(467,"td"),N.mc(468,"filterFunction"),N.Mb(),N.Nb(469,"td"),N.Nb(470,"span",5),N.mc(471,"Function"),N.Mb(),N.Mb(),N.Nb(472,"td"),N.mc(473,"n/a"),N.Mb(),N.Nb(474,"td"),N.mc(475," Function run against the column value when filtering is happening "),N.Mb(),N.Mb(),N.Nb(476,"tr",7),N.Nb(477,"td"),N.mc(478,"Other Table Settings"),N.Mb(),N.Jb(479,"td"),N.Jb(480,"td"),N.Jb(481,"td"),N.Mb(),N.Nb(482,"tr"),N.Nb(483,"td"),N.mc(484,"mode"),N.Mb(),N.Nb(485,"td"),N.Nb(486,"span",5),N.mc(487,"'external'"),N.Mb(),N.mc(488,"|"),N.Nb(489,"span",5),N.mc(490,"'inline'"),N.Mb(),N.Mb(),N.Nb(491,"td"),N.mc(492,"'inline'"),N.Mb(),N.Nb(493,"td"),N.mc(494," Determines how to react on action links (Add, Edit, Delete)."),N.Jb(495,"br"),N.Nb(496,"span",5),N.mc(497,"'external'"),N.Mb(),N.mc(498," - just trigger the events (LINK HERE)."),N.Jb(499,"br"),N.Nb(500,"span",5),N.mc(501,"'inline'"),N.Mb(),N.mc(502," - process internally, show forms/inputs/etc"),N.Jb(503,"br"),N.Mb(),N.Mb(),N.Nb(504,"tr"),N.Nb(505,"td"),N.mc(506,"hideHeader"),N.Mb(),N.Nb(507,"td"),N.Nb(508,"span",5),N.mc(509,"'boolean'"),N.Mb(),N.Mb(),N.Nb(510,"td"),N.mc(511,"false"),N.Mb(),N.Nb(512,"td"),N.mc(513," Set to true to not display the table header (which includes table column titles) "),N.Mb(),N.Mb(),N.Nb(514,"tr"),N.Nb(515,"td"),N.mc(516,"hideSubHeader"),N.Mb(),N.Nb(517,"td"),N.Nb(518,"span",5),N.mc(519,"'boolean'"),N.Mb(),N.Mb(),N.Nb(520,"td"),N.mc(521,"false"),N.Mb(),N.Nb(522,"td"),N.mc(523," Set to true to not display the table sub-header (which includes filters and global table actions (currently - Add action)) "),N.Mb(),N.Mb(),N.Nb(524,"tr"),N.Nb(525,"td"),N.mc(526,"noDataMessage"),N.Mb(),N.Nb(527,"td"),N.Nb(528,"span",5),N.mc(529,"string"),N.Mb(),N.Mb(),N.Nb(530,"td"),N.mc(531,"'No data found'"),N.Mb(),N.Nb(532,"td"),N.mc(533," Message shown when there is no data in the table "),N.Mb(),N.Mb(),N.Nb(534,"tr"),N.Nb(535,"td"),N.mc(536,"attr"),N.Mb();N.Nb(537,"td"),N.Nb(538,"span",5),N.mc(539,"Object"),N.Mb(),N.Mb(),N.Nb(540,"td"),N.mc(541,"n/a"),N.Mb(),N.Nb(542,"td"),N.mc(543," Table attributes settings "),N.Mb(),N.Mb(),N.Nb(544,"tr"),N.Nb(545,"td"),N.mc(546,"attr.id"),N.Mb(),N.Nb(547,"td"),N.Nb(548,"span",5),N.mc(549,"string"),N.Mb(),N.Mb(),N.Nb(550,"td"),N.mc(551,"''"),N.Mb(),N.Nb(552,"td"),N.mc(553," Table element id "),N.Mb(),N.Mb(),N.Nb(554,"tr"),N.Nb(555,"td"),N.mc(556,"attr.class"),N.Mb(),N.Nb(557,"td"),N.Nb(558,"span",5),N.mc(559,"string"),N.Mb(),N.Mb(),N.Nb(560,"td"),N.mc(561,"''"),N.Mb(),N.Nb(562,"td"),N.mc(563," Table element class "),N.Mb(),N.Mb(),N.Nb(564,"tr"),N.Nb(565,"td"),N.mc(566,"actions"),N.Mb(),N.Nb(567,"td"),N.Nb(568,"span",5),N.mc(569,"Object"),N.Mb(),N.Mb(),N.Nb(570,"td"),N.mc(571,"n/a"),N.Mb(),N.Nb(572,"td"),N.mc(573," Settings for the table actions "),N.Mb(),N.Mb(),N.Nb(574,"tr"),N.Nb(575,"td"),N.mc(576,"actions.columnTitle"),N.Mb(),N.Nb(577,"td"),N.Nb(578,"span",5),N.mc(579,"string"),N.Mb(),N.Mb(),N.Nb(580,"td"),N.mc(581,"'Actions'"),N.Mb(),N.Nb(582,"td"),N.mc(583," Actions column title "),N.Mb(),N.Mb(),N.Nb(584,"tr"),N.Nb(585,"td"),N.mc(586,"actions.add"),N.Mb(),N.Nb(587,"td"),N.Nb(588,"span",5),N.mc(589,"boolean"),N.Mb(),N.Mb(),N.Nb(590,"td"),N.mc(591,"true"),N.Mb(),N.Nb(592,"td"),N.mc(593," Show/not show Add button "),N.Mb(),N.Mb(),N.Nb(594,"tr"),N.Nb(595,"td"),N.mc(596,"actions.edit"),N.Mb(),N.Nb(597,"td"),N.Nb(598,"span",5),N.mc(599,"boolean"),N.Mb(),N.Mb(),N.Nb(600,"td"),N.mc(601,"true"),N.Mb(),N.Nb(602,"td"),N.mc(603," Show/not show Edit button "),N.Mb(),N.Mb(),N.Nb(604,"tr"),N.Nb(605,"td"),N.mc(606,"actions.delete"),N.Mb(),N.Nb(607,"td"),N.Nb(608,"span",5),N.mc(609,"boolean"),N.Mb(),N.Mb(),N.Nb(610,"td"),N.mc(611,"true"),N.Mb(),N.Nb(612,"td"),N.mc(613," Show/not show Delete button "),N.Mb(),N.Mb(),N.Nb(614,"tr"),N.Nb(615,"td"),N.mc(616,"actions.position"),N.Mb(),N.Nb(617,"td"),N.Nb(618,"span",5),N.mc(619,"'left'"),N.Mb(),N.mc(620,"|"),N.Nb(621,"span",5),N.mc(622,"'right'"),N.Mb(),N.Mb(),N.Nb(623,"td"),N.mc(624,"'left'"),N.Mb(),N.Nb(625,"td"),N.mc(626," Choose actions column position "),N.Mb(),N.Mb(),N.Nb(627,"tr"),N.Nb(628,"td"),N.mc(629,"filter"),N.Mb(),N.Nb(630,"td"),N.Nb(631,"span",5),N.mc(632,"Object"),N.Mb(),N.Mb(),N.Nb(633,"td"),N.mc(634,"n/a"),N.Mb(),N.Nb(635,"td"),N.mc(636," Settings for the table filter "),N.Mb(),N.Mb(),N.Nb(637,"tr"),N.Nb(638,"td"),N.mc(639,"filter.inputClass"),N.Mb(),N.Nb(640,"td"),N.Nb(641,"span",5),N.mc(642,"string"),N.Mb(),N.Mb(),N.Nb(643,"td"),N.mc(644,"''"),N.Mb(),N.Nb(645,"td"),N.mc(646," Filter input class "),N.Mb(),N.Mb(),N.Nb(647,"tr"),N.Nb(648,"td"),N.mc(649,"edit"),N.Mb(),N.Nb(650,"td"),N.Nb(651,"span",5),N.mc(652,"Object"),N.Mb(),N.Mb(),N.Nb(653,"td"),N.mc(654,"n/a"),N.Mb(),N.Nb(655,"td"),N.mc(656," Edit action settings "),N.Mb(),N.Mb(),N.Nb(657,"tr"),N.Nb(658,"td"),N.mc(659,"edit.inputClass"),N.Mb(),N.Nb(660,"td"),N.Nb(661,"span",5),N.mc(662,"string"),N.Mb(),N.Mb(),N.Nb(663,"td"),N.mc(664,"''"),N.Mb(),N.Nb(665,"td"),N.mc(666," Editing form input class "),N.Mb(),N.Mb(),N.Nb(667,"tr"),N.Nb(668,"td"),N.mc(669,"edit.editButtonContent"),N.Mb(),N.Nb(670,"td"),N.Nb(671,"span",5),N.mc(672,"string"),N.Mb(),N.Mb(),N.Nb(673,"td"),N.mc(674,"'Edit'"),N.Mb(),N.Nb(675,"td"),N.mc(676," Edit row button content/title "),N.Mb(),N.Mb(),N.Nb(677,"tr"),N.Nb(678,"td"),N.mc(679,"edit.saveButtonContent"),N.Mb(),N.Nb(680,"td"),N.Nb(681,"span",5),N.mc(682,"string"),N.Mb(),N.Mb(),N.Nb(683,"td"),N.mc(684,"'Update'"),N.Mb(),N.Nb(685,"td"),N.mc(686," Update button content/title "),N.Mb(),N.Mb(),N.Nb(687,"tr"),N.Nb(688,"td"),N.mc(689,"edit.cancelButtonContent"),N.Mb(),N.Nb(690,"td"),N.Nb(691,"span",5),N.mc(692,"string"),N.Mb(),N.Mb(),N.Nb(693,"td"),N.mc(694,"'Cancel'"),N.Mb(),N.Nb(695,"td"),N.mc(696," Cancel button content/title "),N.Mb(),N.Mb(),N.Nb(697,"tr"),N.Nb(698,"td"),N.mc(699,"edit.confirmSave"),N.Mb(),N.Nb(700,"td"),N.Nb(701,"span",5),N.mc(702,"boolean"),N.Mb(),N.Mb(),N.Nb(703,"td"),N.mc(704,"false"),N.Mb(),N.Nb(705,"td"),N.mc(706," Enable/disable "),N.Nb(707,"span",5),N.mc(708,"(confirmEdit)"),N.Mb(),N.mc(709," event. If enabled data will be edited only if confirm.resolve() called. "),N.Mb(),N.Mb(),N.Nb(710,"tr"),N.Nb(711,"td"),N.mc(712,"add"),N.Mb(),N.Nb(713,"td"),N.Nb(714,"span",5),N.mc(715,"Object"),N.Mb(),N.Mb(),N.Nb(716,"td"),N.mc(717,"n/a"),N.Mb(),N.Nb(718,"td"),N.mc(719," Add action settings "),N.Mb(),N.Mb(),N.Nb(720,"tr"),N.Nb(721,"td"),N.mc(722,"add.inputClass"),N.Mb(),N.Nb(723,"td"),N.Nb(724,"span",5),N.mc(725,"string"),N.Mb(),N.Mb(),N.Nb(726,"td"),N.mc(727,"''"),N.Mb(),N.Nb(728,"td"),N.mc(729," New row input class "),N.Mb(),N.Mb(),N.Nb(730,"tr"),N.Nb(731,"td"),N.mc(732,"add.addButtonContent"),N.Mb(),N.Nb(733,"td"),N.Nb(734,"span",5),N.mc(735,"string"),N.Mb(),N.Mb(),N.Nb(736,"td"),N.mc(737,"'Add New'"),N.Mb(),N.Nb(738,"td"),N.mc(739," Add New button content/title "),N.Mb(),N.Mb(),N.Nb(740,"tr"),N.Nb(741,"td"),N.mc(742,"add.createButtonContent"),N.Mb(),N.Nb(743,"td"),N.Nb(744,"span",5),N.mc(745,"string"),N.Mb(),N.Mb(),N.Nb(746,"td"),N.mc(747,"'Create'"),N.Mb(),N.Nb(748,"td"),N.mc(749," Create button content/title "),N.Mb(),N.Mb(),N.Nb(750,"tr"),N.Nb(751,"td"),N.mc(752,"add.cancelButtonContent"),N.Mb(),N.Nb(753,"td"),N.Nb(754,"span",5),N.mc(755,"string"),N.Mb(),N.Mb(),N.Nb(756,"td"),N.mc(757,"'Cancel'"),N.Mb(),N.Nb(758,"td"),N.mc(759," Cancel button content/title "),N.Mb(),N.Mb(),N.Nb(760,"tr"),N.Nb(761,"td"),N.mc(762,"add.confirmCreate"),N.Mb(),N.Nb(763,"td"),N.Nb(764,"span",5),N.mc(765,"boolean"),N.Mb(),N.Mb(),N.Nb(766,"td"),N.mc(767,"false"),N.Mb(),N.Nb(768,"td"),N.mc(769," Enable/disable "),N.Nb(770,"span",5),N.mc(771,"(confirmCreate)"),N.Mb(),N.mc(772," event. If enabled data will be added only if confirm.resolve() called. "),N.Mb(),N.Mb(),N.Nb(773,"tr"),N.Nb(774,"td"),N.mc(775,"delete"),N.Mb(),N.Nb(776,"td"),N.Nb(777,"span",5),N.mc(778,"Object"),N.Mb(),N.Mb(),N.Nb(779,"td"),N.mc(780,"n/a"),N.Mb(),N.Nb(781,"td"),N.mc(782," Delete action settings "),N.Mb(),N.Mb(),N.Nb(783,"tr"),N.Nb(784,"td"),N.mc(785,"delete.deleteButtonContent"),N.Mb(),N.Nb(786,"td"),N.Nb(787,"span",5),N.mc(788,"string"),N.Mb(),N.Mb(),N.Nb(789,"td"),N.mc(790,"'Delete'"),N.Mb(),N.Nb(791,"td"),N.mc(792," Delete row input class "),N.Mb(),N.Mb(),N.Nb(793,"tr"),N.Nb(794,"td"),N.mc(795,"delete.confirmDelete"),N.Mb(),N.Nb(796,"td"),N.Nb(797,"span",5),N.mc(798,"boolean"),N.Mb(),N.Mb(),N.Nb(799,"td"),N.mc(800,"false"),N.Mb(),N.Nb(801,"td"),N.mc(802," Enable/disable "),N.Nb(803,"span",5),N.mc(804,"(confirmDelete)"),N.Mb(),N.mc(805," event. If enabled data will be deleted only if confirm.resolve() called. "),N.Mb(),N.Mb(),N.Nb(806,"tr"),N.Nb(807,"td"),N.mc(808,"pager"),N.Mb(),N.Nb(809,"td"),N.Nb(810,"span",5),N.mc(811,"Object"),N.Mb(),N.Mb(),N.Nb(812,"td"),N.mc(813,"n/a"),N.Mb(),N.Nb(814,"td"),N.mc(815," Pager settings "),N.Mb(),N.Mb(),N.Nb(816,"tr"),N.Nb(817,"td"),N.mc(818,"pager.display"),N.Mb(),N.Nb(819,"td"),N.Nb(820,"span",5),N.mc(821,"boolean"),N.Mb(),N.Mb(),N.Nb(822,"td"),N.mc(823,"true"),N.Mb(),N.Nb(824,"td"),N.mc(825," Whether to display the pager or not "),N.Mb(),N.Mb(),N.Nb(826,"tr"),N.Nb(827,"td"),N.mc(828,"pager.perPage"),N.Mb(),N.Nb(829,"td"),N.Nb(830,"span",5),N.mc(831,"number"),N.Mb(),N.Mb(),N.Nb(832,"td"),N.mc(833,"10"),N.Mb(),N.Nb(834,"td"),N.mc(835," Rows per page "),N.Mb(),N.Mb(),N.Nb(836,"tr"),N.Nb(837,"td"),N.mc(838,"rowClassFunction"),N.Mb(),N.Nb(839,"td"),N.Nb(840,"span",5),N.mc(841,"Function"),N.Mb(),N.Mb(),N.Nb(842,"td"),N.mc(843,"row"),N.Mb(),N.Nb(844,"td"),N.mc(845," Handle css class for each row in the table "),N.Mb(),N.Mb(),N.Mb(),N.Nb(846,"h3"),N.Nb(847,"a",11),N.Jb(848,"span",3),N.Mb(),N.mc(849,"Component Outputs/Events"),N.Mb(),N.Nb(850,"table"),N.Nb(851,"tr"),N.Nb(852,"th"),N.mc(853,"Event"),N.Mb(),N.Nb(854,"th"),N.mc(855,"Arguments"),N.Mb(),N.Nb(856,"th"),N.mc(857,"Description"),N.Mb(),N.Mb(),N.Nb(858,"tr"),N.Nb(859,"td"),N.mc(860,"(rowSelect)"),N.Mb(),N.Nb(861,"td"),N.mc(862," event: "),N.Nb(863,"span",5),N.mc(864,"Object"),N.Mb(),N.mc(865,", consist of: "),N.Nb(866,"ul"),N.Nb(867,"li"),N.mc(868,"data: "),N.Nb(869,"span",5),N.mc(870,"Object"),N.Mb(),N.mc(871," - selected row data object"),N.Mb(),N.Nb(872,"li"),N.mc(873,"source: "),N.Nb(874,"span",5),N.mc(875,"DataSource"),N.Mb(),N.mc(876," - table data source"),N.Mb(),N.Mb(),N.Mb(),N.Nb(877,"td"),N.mc(878," Triggered once a row is selected (either clicked or selected automatically (after page is changed, after some row is deleted, etc)). "),N.Mb(),N.Mb(),N.Nb(879,"tr"),N.Nb(880,"td"),N.mc(881,"(userRowSelect)"),N.Mb(),N.Nb(882,"td"),N.mc(883," event: "),N.Nb(884,"span",5),N.mc(885,"Object"),N.Mb(),N.mc(886,", consist of: "),N.Nb(887,"ul"),N.Nb(888,"li"),N.mc(889,"data: "),N.Nb(890,"span",5),N.mc(891,"Object"),N.Mb(),N.mc(892," - selected row data object"),N.Mb(),N.Nb(893,"li"),N.mc(894,"source: "),N.Nb(895,"span",5),N.mc(896,"DataSource"),N.Mb(),N.mc(897," - table data source"),N.Mb(),N.Mb(),N.Mb(),N.Nb(898,"td"),N.mc(899," Triggered "),N.Nb(900,"strong"),N.mc(901,"only"),N.Mb(),N.mc(902," on a user click event. "),N.Mb(),N.Mb(),N.Nb(903,"tr"),N.Nb(904,"td"),N.mc(905,"(mouseover)"),N.Mb(),N.Nb(906,"td"),N.mc(907," event: "),N.Nb(908,"span",5),N.mc(909,"Object"),N.Mb(),N.mc(910,", consist of: "),N.Nb(911,"ul"),N.Nb(912,"li"),N.mc(913,"data: "),N.Nb(914,"span",5),N.mc(915,"Object"),N.Mb(),N.mc(916," - highlighted row data object"),N.Mb(),N.Nb(917,"li"),N.mc(918,"source: "),N.Nb(919,"span",5),N.mc(920,"DataSource"),N.Mb(),N.mc(921," - table data source"),N.Mb(),N.Mb(),N.Mb(),N.Nb(922,"td"),N.mc(923," Triggered "),N.Nb(924,"strong"),N.mc(925,"only"),N.Mb(),N.mc(926," on a user mouseover event. "),N.Mb(),N.Mb(),N.Nb(927,"tr"),N.Nb(928,"td"),N.mc(929,"(create)"),N.Mb(),N.Nb(930,"td"),N.mc(931," event: "),N.Nb(932,"span",5),N.mc(933,"Object"),N.Mb(),N.mc(934,", consist of: "),N.Nb(935,"ul"),N.Nb(936,"li"),N.mc(937,"source: "),N.Nb(938,"span",5),N.mc(939,"DataSource"),N.Mb(),N.mc(940," - table data source"),N.Mb(),N.Mb(),N.Mb(),N.Nb(941,"td"),N.mc(942," Triggered once a Create button clicked. Triggered only if table "),N.Nb(943,"strong"),N.mc(944,"mode = external"),N.Mb(),N.mc(945,". "),N.Mb(),N.Mb(),N.Nb(946,"tr"),N.Nb(947,"td"),N.mc(948,"(createConfirm)"),N.Mb(),N.Nb(949,"td"),N.mc(950," event: "),N.Nb(951,"span",5),N.mc(952,"Object"),N.Mb(),N.mc(953,", consist of: "),N.Nb(954,"ul"),N.Nb(955,"li"),N.mc(956,"newData: "),N.Nb(957,"span",5),N.mc(958,"Object"),N.Mb(),N.mc(959," - data entered in a new row"),N.Mb(),N.Nb(960,"li"),N.mc(961,"source: "),N.Nb(962,"span",5),N.mc(963,"DataSource"),N.Mb(),N.mc(964," - table data source"),N.Mb(),N.Nb(965,"li"),N.mc(966,"confirm: "),N.Nb(967,"span",5),N.mc(968,"Deferred"),N.Mb(),N.mc(969," - Deferred object with resolve(newData: Object) and reject() methods."),N.Mb(),N.Mb(),N.Mb(),N.Nb(970,"td"),N.mc(971," Triggered once a Create button clicked. Triggered only if table "),N.Nb(972,"strong"),N.mc(973,"confirmCreate = true and mode = inline"),N.Mb(),N.mc(974,". Allows you to confirm changes before they are applied to the table data source. "),N.Mb(),N.Mb(),N.Nb(975,"tr"),N.Nb(976,"td"),N.mc(977,"(edit)"),N.Mb(),N.Nb(978,"td"),N.mc(979," event: "),N.Nb(980,"span",5),N.mc(981,"Object"),N.Mb(),N.mc(982,", consist of: "),N.Nb(983,"ul"),N.Nb(984,"li"),N.mc(985,"data: "),N.Nb(986,"span",5),N.mc(987,"Object"),N.Mb(),N.mc(988," - row data object"),N.Mb(),N.Nb(989,"li"),N.mc(990,"source: "),N.Nb(991,"span",5),N.mc(992,"DataSource"),N.Mb(),N.mc(993," - table data source"),N.Mb(),N.Mb(),N.Mb(),N.Nb(994,"td"),N.mc(995," Triggered once an Edit button clicked on a row. Triggered only if table "),N.Nb(996,"strong"),N.mc(997,"mode = external"),N.Mb(),N.mc(998,". "),N.Mb(),N.Mb(),N.Nb(999,"tr"),N.Nb(1e3,"td"),N.mc(1001,"(editConfirm)"),N.Mb(),N.Nb(1002,"td"),N.mc(1003," event: "),N.Nb(1004,"span",5),N.mc(1005,"Object"),N.Mb(),N.mc(1006,", consist of: "),N.Nb(1007,"ul"),N.Nb(1008,"li"),N.mc(1009,"data: "),N.Nb(1010,"span",5),N.mc(1011,"Object"),N.Mb(),N.mc(1012," - original row data"),N.Mb(),N.Nb(1013,"li"),N.mc(1014,"newData: "),N.Nb(1015,"span",5),N.mc(1016,"Object"),N.Mb(),N.mc(1017," - edited data"),N.Mb(),N.Nb(1018,"li"),N.mc(1019,"source: "),N.Nb(1020,"span",5),N.mc(1021,"DataSource"),N.Mb(),N.mc(1022," - table data source"),N.Mb(),N.Nb(1023,"li"),N.mc(1024,"confirm: "),N.Nb(1025,"span",5),N.mc(1026,"Deferred"),N.Mb(),N.mc(1027," - Deferred object with resolve(newData: Object) and reject() methods."),N.Mb(),N.Mb(),N.Mb(),N.Nb(1028,"td"),N.mc(1029," Triggered once a Save button clicked. Triggered only if table "),N.Nb(1030,"strong"),N.mc(1031,"confirmSave = true and mode = inline"),N.Mb(),N.mc(1032,". Allows you to confirm changes before they are applied to the table data source. "),N.Mb(),N.Mb(),N.Nb(1033,"tr"),N.Nb(1034,"td"),N.mc(1035,"(delete)"),N.Mb(),N.Nb(1036,"td"),N.mc(1037," event: "),N.Nb(1038,"span",5),N.mc(1039,"Object"),N.Mb(),N.mc(1040,", consist of: "),N.Nb(1041,"ul"),N.Nb(1042,"li"),N.mc(1043,"data: "),N.Nb(1044,"span",5),N.mc(1045,"Object"),N.Mb(),N.mc(1046," - row data object"),N.Mb(),N.Nb(1047,"li"),N.mc(1048,"source: "),N.Nb(1049,"span",5),N.mc(1050,"DataSource"),N.Mb(),N.mc(1051," - table data source"),N.Mb(),N.Mb(),N.Mb(),N.Nb(1052,"td"),N.mc(1053," Triggered once a Delete button clicked on a row. Triggered only if table "),N.Nb(1054,"strong"),N.mc(1055,"mode = external"),N.Mb(),N.mc(1056,". "),N.Mb();N.Mb(),N.Nb(1057,"tr"),N.Nb(1058,"td"),N.mc(1059,"(deleteConfirm)"),N.Mb(),N.Nb(1060,"td"),N.mc(1061," event: "),N.Nb(1062,"span",5),N.mc(1063,"Object"),N.Mb(),N.mc(1064,", consist of: "),N.Nb(1065,"ul"),N.Nb(1066,"li"),N.mc(1067,"data: "),N.Nb(1068,"span",5),N.mc(1069,"Object"),N.Mb(),N.mc(1070," - data object to delete"),N.Mb(),N.Nb(1071,"li"),N.mc(1072,"source: "),N.Nb(1073,"span",5),N.mc(1074,"DataSource"),N.Mb(),N.mc(1075," - table data source"),N.Mb(),N.Nb(1076,"li"),N.mc(1077,"confirm: "),N.Nb(1078,"span",5),N.mc(1079,"Deferred"),N.Mb(),N.mc(1080," - Deferred object with resolve() and reject() methods."),N.Mb(),N.Mb(),N.Mb(),N.Nb(1081,"td"),N.mc(1082," Triggered once a Delete button clicked. Triggered only if table "),N.Nb(1083,"strong"),N.mc(1084,"confirmDelete = true and mode = inline"),N.Mb(),N.mc(1085,". Allows you to confirm changes before they are applied to the table data source. "),N.Mb(),N.Mb(),N.Mb(),N.Nb(1086,"h3"),N.Nb(1087,"a",12),N.Jb(1088,"span",3),N.Mb(),N.mc(1089,"Data Source Methods"),N.Mb(),N.Nb(1090,"table"),N.Nb(1091,"tr"),N.Nb(1092,"th"),N.mc(1093,"Method"),N.Mb(),N.Nb(1094,"th"),N.mc(1095,"Arguments"),N.Mb(),N.Nb(1096,"th"),N.mc(1097,"Description"),N.Mb(),N.Mb(),N.Nb(1098,"tr"),N.Nb(1099,"td"),N.mc(1100,"load"),N.Mb(),N.Nb(1101,"td"),N.Nb(1102,"ul"),N.Nb(1103,"li"),N.mc(1104,"data: "),N.Nb(1105,"span",5),N.mc(1106,"Array"),N.Mb(),N.mc(1107," - data to load into the table"),N.Mb(),N.Mb(),N.Mb(),N.Nb(1108,"td"),N.mc(1109," Reload table with new data. For example if some data has received from the server. "),N.Mb(),N.Mb(),N.Nb(1110,"tr"),N.Nb(1111,"td"),N.mc(1112,"prepend"),N.Mb(),N.Nb(1113,"td"),N.Nb(1114,"ul"),N.Nb(1115,"li"),N.mc(1116,"element: "),N.Nb(1117,"span",5),N.mc(1118,"Object"),N.Mb(),N.mc(1119," - object to add"),N.Mb(),N.Mb(),N.Mb(),N.Nb(1120,"td"),N.mc(1121," Add a new element to the beginning of the table. "),N.Mb(),N.Mb(),N.Nb(1122,"tr"),N.Nb(1123,"td"),N.mc(1124,"append"),N.Mb(),N.Nb(1125,"td"),N.Nb(1126,"ul"),N.Nb(1127,"li"),N.mc(1128,"element: "),N.Nb(1129,"span",5),N.mc(1130,"Object"),N.Mb(),N.mc(1131," - object to add"),N.Mb(),N.Mb(),N.Mb(),N.Nb(1132,"td"),N.mc(1133," Add a new element to the end of the table. This also will switch current page to the last one. "),N.Mb(),N.Mb(),N.Nb(1134,"tr"),N.Nb(1135,"td"),N.mc(1136,"add"),N.Mb(),N.Nb(1137,"td"),N.Nb(1138,"ul"),N.Nb(1139,"li"),N.mc(1140,"element: "),N.Nb(1141,"span",5),N.mc(1142,"Object"),N.Mb(),N.mc(1143," - object to add"),N.Mb(),N.Mb(),N.Mb(),N.Nb(1144,"td"),N.mc(1145," Add a new element to the table. "),N.Mb(),N.Mb(),N.Nb(1146,"tr"),N.Nb(1147,"td"),N.mc(1148,"remove"),N.Mb(),N.Nb(1149,"td"),N.Nb(1150,"ul"),N.Nb(1151,"li"),N.mc(1152,"element: "),N.Nb(1153,"span",5),N.mc(1154,"Object"),N.Mb(),N.mc(1155," - object to remove"),N.Mb(),N.Mb(),N.Mb(),N.Nb(1156,"td"),N.mc(1157," Remove the element from the table. "),N.Mb(),N.Mb(),N.Nb(1158,"tr"),N.Nb(1159,"td"),N.mc(1160,"update"),N.Mb(),N.Nb(1161,"td"),N.Nb(1162,"ul"),N.Nb(1163,"li"),N.mc(1164,"element: "),N.Nb(1165,"span",5),N.mc(1166,"Object"),N.Mb(),N.mc(1167," - object to update"),N.Mb(),N.Nb(1168,"li"),N.mc(1169,"values: "),N.Nb(1170,"span",5),N.mc(1171,"Object"),N.Mb(),N.mc(1172," - object with new values"),N.Mb(),N.Mb(),N.Mb(),N.Nb(1173,"td"),N.mc(1174," Update the element in the table. "),N.Mb(),N.Mb(),N.Nb(1175,"tr"),N.Nb(1176,"td"),N.mc(1177,"find"),N.Mb(),N.Nb(1178,"td"),N.Nb(1179,"ul"),N.Nb(1180,"li"),N.mc(1181,"element: "),N.Nb(1182,"span",5),N.mc(1183,"Object"),N.Mb(),N.mc(1184," - object to find"),N.Mb(),N.Mb(),N.Mb(),N.Nb(1185,"td"),N.mc(1186," Find the element in the table. "),N.Mb(),N.Mb(),N.Nb(1187,"tr"),N.Nb(1188,"td"),N.mc(1189,"getElements"),N.Mb(),N.Nb(1190,"td"),N.mc(1191," n/a "),N.Mb(),N.Nb(1192,"td"),N.mc(1193," Get elements for current sort, filter and page. "),N.Mb(),N.Mb(),N.Nb(1194,"tr"),N.Nb(1195,"td"),N.mc(1196,"getFilteredAndSorted"),N.Mb(),N.Nb(1197,"td"),N.mc(1198," n/a "),N.Mb(),N.Nb(1199,"td"),N.mc(1200," Get sorted, filtered and not paginated elements. "),N.Mb(),N.Mb(),N.Nb(1201,"tr"),N.Nb(1202,"td"),N.mc(1203,"getAll"),N.Mb(),N.Nb(1204,"td"),N.mc(1205," n/a "),N.Mb(),N.Nb(1206,"td"),N.mc(1207," Get all data source elements. "),N.Mb(),N.Mb(),N.Nb(1208,"tr"),N.Nb(1209,"td"),N.mc(1210,"setSort"),N.Mb(),N.Nb(1211,"td"),N.Nb(1212,"ul"),N.Nb(1213,"li"),N.mc(1214," conf: "),N.Nb(1215,"span",5),N.mc(1216,"Array"),N.Mb(),N.mc(1217," - array of sort setting objects, object format is: "),N.Nb(1218,"ul"),N.Nb(1219,"li"),N.mc(1220,"field - "),N.Nb(1221,"span",5),N.mc(1222,"string"),N.Mb(),N.mc(1223," - columnKey"),N.Mb(),N.Nb(1224,"li"),N.mc(1225,"direction - "),N.Nb(1226,"span",13),N.mc(1227,"string|null"),N.Mb(),N.mc(1228," - 'asc'|'desc'|null - sort direction"),N.Mb(),N.Nb(1229,"li"),N.mc(1230,"compare - "),N.Nb(1231,"span",13),N.mc(1232,"Function|null"),N.Mb(),N.mc(1233," - custom compare function"),N.Mb(),N.Mb(),N.Mb(),N.Nb(1234,"li"),N.mc(1235," doEmit: "),N.Nb(1236,"span",5),N.mc(1237,"boolean"),N.Mb(),N.mc(1238," - emit event (to refresh the table) or not, default = true "),N.Mb(),N.Mb(),N.Mb(),N.Nb(1239,"td"),N.mc(1240," Set table sorts, example: "),N.Jb(1241,"br"),N.Nb(1242,"code"),N.mc(1243),N.Mb(),N.Mb(),N.Mb(),N.Nb(1244,"tr"),N.Nb(1245,"td"),N.mc(1246,"setFilter"),N.Mb(),N.Nb(1247,"td"),N.Nb(1248,"ul"),N.Nb(1249,"li"),N.mc(1250," conf: "),N.Nb(1251,"span",5),N.mc(1252,"Array"),N.Mb(),N.mc(1253," - array of filter setting objects, object format is: "),N.Nb(1254,"ul"),N.Nb(1255,"li"),N.mc(1256,"field - "),N.Nb(1257,"span",5),N.mc(1258,"string"),N.Mb(),N.mc(1259," - columnKey"),N.Mb(),N.Nb(1260,"li"),N.mc(1261,"search - "),N.Nb(1262,"span",13),N.mc(1263,"string"),N.Mb(),N.mc(1264," - search query"),N.Mb(),N.Nb(1265,"li"),N.mc(1266,"filter - "),N.Nb(1267,"span",13),N.mc(1268,"Function|null"),N.Mb(),N.mc(1269," - custom filter function"),N.Mb(),N.Mb(),N.Mb(),N.Nb(1270,"li"),N.mc(1271," andOperator: "),N.Nb(1272,"span",5),N.mc(1273,"boolean"),N.Mb(),N.mc(1274," - how to process multiple filters (as AND or as OR), default = true (AND) "),N.Mb(),N.Nb(1275,"li"),N.mc(1276," doEmit: "),N.Nb(1277,"span",5),N.mc(1278,"boolean"),N.Mb(),N.mc(1279," - emit event (to refresh the table) or not, default = true "),N.Mb(),N.Mb(),N.Mb(),N.Nb(1280,"td"),N.mc(1281," Set table filters, example: "),N.Jb(1282,"br"),N.Nb(1283,"code"),N.mc(1284),N.Mb(),N.Mb(),N.Mb(),N.Nb(1285,"tr"),N.Nb(1286,"td"),N.mc(1287,"addFilter"),N.Mb(),N.Nb(1288,"td"),N.Nb(1289,"ul"),N.Nb(1290,"li"),N.mc(1291," conf: "),N.Nb(1292,"span",5),N.mc(1293,"Object"),N.Mb(),N.mc(1294," - one filter object, format is: "),N.Nb(1295,"ul"),N.Nb(1296,"li"),N.mc(1297,"field - "),N.Nb(1298,"span",5),N.mc(1299,"string"),N.Mb(),N.mc(1300," - columnKey"),N.Mb(),N.Nb(1301,"li"),N.mc(1302,"search - "),N.Nb(1303,"span",13),N.mc(1304,"string"),N.Mb(),N.mc(1305," - search query"),N.Mb(),N.Nb(1306,"li"),N.mc(1307,"filter - "),N.Nb(1308,"span",13),N.mc(1309,"Function|null"),N.Mb(),N.mc(1310," - custom filter function"),N.Mb(),N.Mb(),N.Mb(),N.Nb(1311,"li"),N.mc(1312," andOperator: "),N.Nb(1313,"span",5),N.mc(1314,"boolean"),N.Mb(),N.mc(1315," - how to process multiple filters (as AND or as OR), default = true (AND) "),N.Mb(),N.Nb(1316,"li"),N.mc(1317," doEmit: "),N.Nb(1318,"span",5),N.mc(1319,"boolean"),N.Mb(),N.mc(1320," - emit event (to refresh the table) or not, default = true "),N.Mb(),N.Mb(),N.Mb(),N.Nb(1321,"td"),N.mc(1322," Set table filter for one column, example: "),N.Jb(1323,"br"),N.Nb(1324,"code"),N.mc(1325),N.Mb(),N.Mb(),N.Mb(),N.Nb(1326,"tr"),N.Nb(1327,"td"),N.mc(1328,"setPaging"),N.Mb(),N.Nb(1329,"td"),N.Nb(1330,"ul"),N.Nb(1331,"li"),N.mc(1332," page: "),N.Nb(1333,"span",5),N.mc(1334,"number"),N.Mb(),N.mc(1335," - page number "),N.Mb(),N.Nb(1336,"li"),N.mc(1337," perPage: "),N.Nb(1338,"span",5),N.mc(1339,"number"),N.Mb(),N.mc(1340," - about per page "),N.Mb(),N.Nb(1341,"li"),N.mc(1342," doEmit: "),N.Nb(1343,"span",5),N.mc(1344,"boolean"),N.Mb(),N.mc(1345," - emit event (to refresh the table) or not, default = true "),N.Mb(),N.Mb(),N.Mb(),N.Nb(1346,"td"),N.mc(1347," Set table pagination settings "),N.Mb(),N.Mb(),N.Nb(1348,"tr"),N.Nb(1349,"td"),N.mc(1350,"setPage"),N.Mb(),N.Nb(1351,"td"),N.Nb(1352,"ul"),N.Nb(1353,"li"),N.mc(1354," page: "),N.Nb(1355,"span",5),N.mc(1356,"number"),N.Mb(),N.mc(1357," - page number "),N.Mb(),N.Nb(1358,"li"),N.mc(1359," doEmit: "),N.Nb(1360,"span",5),N.mc(1361,"boolean"),N.Mb(),N.mc(1362," - emit event (to refresh the table) or not, default = true "),N.Mb(),N.Mb(),N.Mb(),N.Nb(1363,"td"),N.mc(1364," Set table page "),N.Mb(),N.Mb(),N.Nb(1365,"tr"),N.Nb(1366,"td"),N.mc(1367,"reset"),N.Mb(),N.Nb(1368,"td"),N.Nb(1369,"ul"),N.Nb(1370,"li"),N.mc(1371,"silent: "),N.Nb(1372,"span",5),N.mc(1373,"boolean"),N.Mb(),N.mc(1374," - if true - you have to additionally call `refresh` to reflect the changes"),N.Mb(),N.Mb(),N.Mb(),N.Nb(1375,"td"),N.mc(1376," Set data source to first page with empty filter and empty sort. "),N.Mb(),N.Mb(),N.Nb(1377,"tr"),N.Nb(1378,"td"),N.mc(1379,"refresh"),N.Mb(),N.Nb(1380,"td"),N.mc(1381," n/a "),N.Mb(),N.Nb(1382,"td"),N.mc(1383," Refresh data in the data source. In most cases you won't need this method. "),N.Mb(),N.Mb(),N.Nb(1384,"tr"),N.Nb(1385,"td"),N.mc(1386,"count"),N.Mb(),N.Nb(1387,"td"),N.mc(1388," n/a "),N.Mb(),N.Nb(1389,"td"),N.mc(1390," Return count of element in the data source. "),N.Mb(),N.Mb(),N.Nb(1391,"tr"),N.Nb(1392,"td"),N.mc(1393,"empty"),N.Mb(),N.Nb(1394,"td"),N.mc(1395," n/a "),N.Mb(),N.Nb(1396,"td"),N.mc(1397," Empty the data source. "),N.Mb(),N.Mb(),N.Mb(),N.Mb()}2&b&&(N.xb(71),N.oc(" columns: ","{"," "),N.xb(3),N.qc(": ","{"," title: 'Some Title' ","}"," ","}"," "),N.xb(221),N.pc("","{"," value: 'Element Value', title: 'Element Title' ","}",""),N.xb(38),N.pc("","{"," id: 10, name: 'Nick', email: 'rey@karina.biz' ","}",""),N.xb(910),N.pc("this.source.setSort([","{"," field: 'id', direction: 'asc' ","}","]);"),N.xb(41),N.rc("this.source.setFilter([","{"," field: 'id', search: 'foobar' ","}",", ","{"," field: 'name', search: 'foobar' ","}","]);"),N.xb(41),N.pc("this.source.addFilter(","{"," field: 'id', search: 'foobar' ","}",");"))},directives:[M.a],styles:[".nested-obj[_ngcontent-%COMP%]{color:#bdbdbd}"]}),n)}],s=((m=function t(){b(this,t)}).\u0275mod=N.Gb({type:m}),m.\u0275inj=N.Fb({factory:function(b){return new(b||m)},imports:[[a.b,o.c.forChild(r),d.a]]}),m)}}])}();