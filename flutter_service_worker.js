'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6e1515e7937b6d21346741b6fc54aa5d",
".git/config": "24495d0e39d4462da7ce69b711d02db0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7862f193dd9575a300708fe08ff4e219",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "839c20aabe3c9e583ca034e401728325",
".git/logs/refs/heads/main": "fe50b3aa4d9294111c862a600d8d4588",
".git/logs/refs/remotes/origin/main": "a9820bb26905654f0853a02038504250",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/02/ef9845ba3ac4c6f92c89e2f992dce8e4a2569f": "fbed0120c5b2ad3309073a918dff4a62",
".git/objects/03/e736613a750cdd8d4f54bca28844e2d13257cb": "bd840ac16c281d81f004822f55e1db62",
".git/objects/07/b989b28cde0f575f35c5600eea3120631da3c8": "45dd812f54e70a68faae91ffabb4239e",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/09/1687a7039a05b8e9689031b33fe103d32f26a3": "fa465841c5c7e8ac01e6065bcde9bcde",
".git/objects/0a/1f8c76bcea5adb46b7e591da0279e57ab26d23": "d87b549d9596b4b2c52910acfb5bc674",
".git/objects/0c/45e29c4596d271dce766b94db5b8d7c60aeea4": "f9b20761343537ce57d40bc995620748",
".git/objects/0f/e209d34e0d392311d65139054cea754f8628dd": "4931e870f897bf44078f39e57ad008b3",
".git/objects/11/5065fdaa451ebc9c554b3e0f268a3383d418f2": "b578c30dcf07e857218f34dc33daaf1a",
".git/objects/12/c2a1be5bea2da306b9563ca77350742bbbf810": "97ac0232b710f1bca140271970a9ee63",
".git/objects/12/e9e49df8a7caa8186d1186e03de32bbbc09ed9": "4b00c38925609e43c2caac854069f309",
".git/objects/15/0088b829986256f4e4cbf9da5770dc0f088182": "f03f224eed6f50d6f3ecde7ba4021c54",
".git/objects/18/1e264b72f380d294ea9367549cae3bb42e2217": "0b218511f1e12ad54e9df5bc511256e9",
".git/objects/18/77863a9c2c3d952c80e3d49d11353b5f0c84d6": "8c5527f32edf10709601061f799f9cf6",
".git/objects/19/2da35fa6508bfa9ea00116c4c91f7001c13e3f": "f4c596e86b3e36233b02de320ff58bbf",
".git/objects/1a/88358492462610c5b856bc3a20356170d52e58": "3cf8562fb5594c5ace903afeb9355387",
".git/objects/1a/d4d2b60cde478de0f5dae25c23a4cbebaa8edf": "ea55ac2ec38f61cf805605c68ba647d8",
".git/objects/1c/f5d25034c20d2e62f0ad7070a7777b64dc00d6": "da1aa42212cfde0181d9b0c998ad554d",
".git/objects/1d/f7db4c69176d2acfbe42f6fbc0de62b4a41ce6": "932e8d0a923baf52bb2a046482e58ac7",
".git/objects/1e/899e361b004c9ad32a7d79f218dcf00a497120": "8ad4430975300c3c6a69d0ad83ae4f84",
".git/objects/1f/435bebcbd3d0ecb454b4fcb94f6e8ef4af5483": "6f07a51e8530d2318c3e09aef1a1e559",
".git/objects/22/51bd0dc15e205a9077013be1434c460316864a": "0dfd636f26f9149e2079e6253e803e7f",
".git/objects/24/bab64bd64612bdae42863e891dae8b9abb8b7d": "8ea6e14637c3cff32551653e21d5a893",
".git/objects/26/591bc2c1d21c4a6f28a29fdce3b7858d20f65d": "e7a33f923748bfdd0f9f82ffd436a9f8",
".git/objects/2b/ad6e41c4489f942389fd1fb1d1853518119cbb": "db6920362bdfb6a0f7fd87d5657d37f1",
".git/objects/2b/b154cdfe6ec054625269646a052ab084a83560": "24351276c2b2effe85f7fee493de077e",
".git/objects/2c/578315ee40590c727c373d12289381d6e16c1f": "e9633605441dd343f5b485ff98024615",
".git/objects/2e/e62bcaaa619bfc3337f378b883430d9b7cb29f": "85ddb08e9e1840f7c763367b9024eac8",
".git/objects/33/d55ca90e37f8aa8547970bb98c166a73cbe654": "dbbefbc57a83a073f1beb52526503f75",
".git/objects/35/07e48a9a4597aac0a8389ca0039dacbc73eb54": "4036d7b9e02fe01d3f8db93bc0b84c1f",
".git/objects/36/25819b117d7c507a453e455a22baa8c359d93e": "b7f5a63e26b3c6a15d563d43d1d2f114",
".git/objects/37/a6d9e08ecb74210961e20c278dc2b5d4e29cda": "8d4e88fed83b4d8d3d4f7a2ae5a2ad7e",
".git/objects/38/e48421e729e33c277b9760d59b4c3b431b2663": "e48541124b91177b104c308189bfe83e",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3b/5f07820ec4f75f0ee493d442fc486ebad70143": "8e5d7abafe587bf6d910ba6efba68f57",
".git/objects/3c/3ed546b8a62393f57ccaaf67fcf2cc008f799d": "e2a5bb5fdbdcbaebe312a350ee687e81",
".git/objects/3d/8bc607909227585ee76d3d596a1195091e9610": "b6d02561c0ea4f5707fef7fbeb48f66f",
".git/objects/3e/83c993d3350b98b357e79bdf192f089c8a77aa": "bb41b1493019afccc8ac33d5c7e9f878",
".git/objects/40/925ea505a1d513eb3e3fd348578bbaba75bd95": "fb28238e2e35d42afcf6c0fe0dc4b143",
".git/objects/44/8589b497bfdfb9147d696796915a1bbae59a20": "58454e34b51b62f3e6d09efd12d4caab",
".git/objects/4e/6774de4ae86c99c5ae3a00b0ff7ac877b4b3c4": "816b1bbf6d699b35d988f4fd20f317b5",
".git/objects/4f/12f5735931b15029aca6de9abd42a4cee8ace5": "e9cc951956c1cb5b3353af20cf171c73",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/53/3594e5ae9036fa28e28a3a6aa6ba40aed09297": "93cce656a78016bf16724daabdaea8ce",
".git/objects/53/df2158046f96e54d56c219cb4cc09b6d47bbff": "0a932165f1e01342b31814c3f806b69e",
".git/objects/55/28138a08f09648d950e2bdb96ce0e4737a3573": "10c74a62605d0dcfbd5345dba4855a48",
".git/objects/55/a46a1e30631ce1d2263ec05604abfbe48b9e27": "21c377c01753c80c66f5f14aed6a9195",
".git/objects/56/37d65976f66b0e63a073a2a94bac6a86e4df16": "9a8602278f99825b3bef2fff47bdeb2d",
".git/objects/58/3d8f58f04f575c4347a22ded6942bcc272498d": "bec97aaa6c881e4faa89effe9fcff21b",
".git/objects/59/0f630acadb6fae2d7cde0c433b0f00a202ee12": "ed3d1d9f6b526fa0982a636498ed6c23",
".git/objects/5a/a5a6889fe6d6103dc9a2a14b0cc3a9cf77e227": "1323f87881a6c79878b3fbafdfe36627",
".git/objects/5c/044cc96f4247b36a2df9497bda8ada8896e601": "8f0cd395960e7b4301cdfe4e2c00ab8e",
".git/objects/5c/9f32809aba969e2390ba218c0b21ab03bcc9e3": "458596b08256666f8be5cc163b39349d",
".git/objects/5d/01296a515a560bfa8a0985b3790e067ced76d2": "daeb6f621b9084af78649642ccfc24ac",
".git/objects/5e/8587c6577c0f743672b57571242f5de24d1843": "d23adfca2daebaab36549d44ed276770",
".git/objects/5f/b06735621084555a380adc46cdb10ea6da4799": "1dfc84110dcae0e8ad67d6abef3d53fa",
".git/objects/60/3e610a3ac0b7daec7e150c03aeba5cd8c613b7": "cca41bf3f120c9cbc92541cfaffcf89f",
".git/objects/68/3b6b1085daf0a3a64e29e035c2feb9a16972df": "58e7bd7c177d6437b0fd7468766d981c",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/6c/44ac0fa88bcb047a899944975ee7dc10afd748": "ced379354e90b9a655e051173aa39abe",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/70/f9ac49c4930c8f9ce459c6d8f6f3107fdb747a": "d88b25dd15915b376d97fce50c3adea8",
".git/objects/73/e7aaa17479680ceffc62212f2a2a278b3f2fa3": "53e5fba13fe72a4f6277e45ff1af09d4",
".git/objects/74/3fa7b318a82e9fdc4cea3731760b2f4ab5b602": "a9c2e03ca27e9176d979074c8624d7ec",
".git/objects/74/a5e1ca5fcf5cc36ef531191d13b278885a01ac": "6312a9d9063afaec22cedc48909e831d",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/75/14cb088ecdf5588159d7c082584156d0792d7c": "1c5726c54c5993808b9190c4ad40cdeb",
".git/objects/76/65a27b96ca27f6275e2c35dc22c267153facb0": "b889174e80e3a43b148dbf87de68b116",
".git/objects/77/ff289a152fcd1d66318b5869e2009a34db02a7": "d3da13625c0a05adf955052bd27b6f52",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7e/48f3ce2ab75de3562ecff4ce22870051161ef4": "359dbefd8dd660ec12c92b751a680d4a",
".git/objects/7e/c61c39e64667671e4ca1bac5c7baca16160229": "32d11db0ec640572c244e39e4d2d8d17",
".git/objects/7f/c4c697edee1b8619344235fa454570c48168f9": "cea839068307435b2f08245e3a1fc72a",
".git/objects/82/f1166329a358e80184fed0a9165e8ce9f06c3e": "90dfb53794ef38f438b6e8cec166cf90",
".git/objects/84/47b235492eb322631e1b826764d2023c88a10e": "c3a00b7ec7ed977bccaf1137334d64e6",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/86/65fa1c8e3f002eae6d9eb444d6c8a9600a4db9": "645c0b179412a08259431fb1251c6b82",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/90/a239edfcb67ff767045fdd12ebc3b2fb8096c6": "1309203f34adb0d2d8b37a3439b89808",
".git/objects/93/39e898715872818a2c880c398e8b5bd85ae746": "35ba61e6abe8072a5fc357a1c365b3bf",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/94/41cb9b4896e8f2651a12cb22f17d7b96f5afd1": "7bcdc8d640ceb7d5d5f400ffdba5a888",
".git/objects/94/9df958d6bd52b2b629e79f60b5fe917c7d1cb2": "041f9861828e5d93f5ccaf854776417b",
".git/objects/95/65980fbf58e1060004d9b8d125c199395cb4e7": "e92eb72098c21c6c676b785fe3fde26f",
".git/objects/97/ba3cc2848265dd7d93faaf5b36e6c0035e165d": "be3f116e2bb7bce898533aff8b5df18a",
".git/objects/9b/715fc68c9eb1f9460ba1696f79582a440be820": "fbde1eac729d758c6ba7095484a66272",
".git/objects/9b/d5803d3f34b26cb51ff2745e81924a9b24625d": "d0b3b749b1ce27b1b066323d2fe1aec2",
".git/objects/9b/d8adedf02e7bf91ed1f913ca338c27a78ae8bc": "4c00a95988ae9bebf0e29c0a20249e8b",
".git/objects/9c/54deb4520b85febac6555864a8c6e7df95e29c": "799315ad66b027a1f7d12c6e3ea95289",
".git/objects/9e/595c3fe93421d226e8ecf5d716db045fd13d94": "3ed93b372249336386a99a20f5c9a9fa",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a0/951a561dfd45db68ebc76ec6637451b24c8a1d": "a4ef730e131126663cac07a939b1c626",
".git/objects/a2/6ded95d19919387d1837783e4fa31964958eda": "d075b29ce7de550d7140d7959678a23f",
".git/objects/a3/34b36cbe833d9cebc3c4f7eda190b13d5b8e94": "129383372f64a332ce67fbf044fcebb9",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a8/644946efad02c47cf9542109a9e23928337db6": "2e19e1948954acbd05c3ff78ce224ccf",
".git/objects/aa/47e22525660971df1235d045dcf7de0566bcc6": "917b1ea727a34bcd151696456e32ca52",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/ad/fc7637942bed94589bc4c03221637b2046d9fe": "e47f53797867ea99efdf8428e5089691",
".git/objects/ad/fe4b301ad68407312e14df09ac81328b37e6ec": "a79572cf214f4f54f8c7acec93c4e27c",
".git/objects/ae/de717398084c60af4dd711768ed64361cc8b52": "8d8f46bec45a03bac277926b205b18dd",
".git/objects/b0/c2fa64f32709c2c3f69898ce7973a1c3449560": "e0bc74209b6eb644010f15a30f210b9b",
".git/objects/b5/d10c00f33e2da18e3a0b081087cf497c05ba22": "392656dc0a2fef7dc15462048dc2e2e3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/99c9a4d6f7064128c4fea2f7cbcb3f56419ef7": "33f2e961cdb1ac36e31bf7922cd218c0",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/ba/b1429e0c75025cd6e46b31546365528334609c": "49abd58a73e72dbd2996a1ce71526dc5",
".git/objects/ba/ecaccdb2ef10742882663f4e7b4d8aa9992090": "eee392f58f5f699ddec40c70cce8dfd7",
".git/objects/bb/645490667f18a2092b751d362b6bd61c3d83c5": "d3caf452f8c3a0f8143429a47cb400cf",
".git/objects/bb/8ac3f883e499ce0228839a35a179a9a4d088e7": "5a1fd9cb5d3518139e02d1c258662f5d",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/c0/1ff37a7e8c6f43226431c50c7d66019f89811d": "d36d2ceff23ecb8c0bbb4f2f5dd53d45",
".git/objects/c3/73b1b0712aee16e12fb114be37608f7fdd6b52": "630d83566366a36806f63cbd0242c68a",
".git/objects/c4/5e46aa3e9ca722f7b63754080c2c1441eb86a2": "1c610a5f1db6ee38f53fe711230c4573",
".git/objects/c4/6dacd07fc5019dcfacd314a698437419b891c0": "12e0b482eb51f6cab8aae44b0bd13865",
".git/objects/c4/b7d668db7c7db6258ff2ff4424b9ea7728a392": "cfda456338159f5bbae74614510f1d72",
".git/objects/c5/5c654b1843adcbe54700ccabd7b7b10801869f": "c87803175cd9ba3155f92ba6a4d34cdb",
".git/objects/c5/fc5ebbee5b8c48fcdea60836dcaac39041e708": "f6faa1ae0c8187929b4f65bd622bbabb",
".git/objects/c6/59d66cbc3850004e11f2e677ddc24dbd8d4426": "c105866f5f85c60c28c59173a3b504eb",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/cc/efa2aaa4712f70aca5e40dfba09776f5cc1697": "2b4a79810399f6d19bf29ed90346a7ba",
".git/objects/d3/74bf75cc0acfc9604a4846a478f57895c64f45": "2a1d8170ad82814a714b1ce5f2ccfe9d",
".git/objects/d3/99c8e78e5569faf8873d38a4122cde8c5b97e5": "aae6a8feb38f341d0e6a438bfbde1f86",
".git/objects/d3/e6cbdfaa30e587ba18d296fc6877bec38f4f6b": "fd612b72bbb19e25d356109afa09cd23",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/561bc7259d18cd764078282f1b3b063f961321": "a027f080aaad86c63ee8bda76cae4acd",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/14c0a908baaccb4f3cbb813371d84f26d524e4": "5dba15c44a008f10f0ff527ca3385dcc",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/da/b641b156f649211e996e7b26131b0c6f0a42e3": "e17d49176553dda85e97be10f6e48390",
".git/objects/db/152dc3b0fc3798f791365e7c1473ffc249384b": "a20a7e5e36876c7b2391b1f79b27a051",
".git/objects/df/7093608a7eb6173529ce9eeeb4d46e3a8290e5": "151239f49193115888a1b60c3a47cefb",
".git/objects/e0/2ff8346ec43aed677bf2d0f6b96e4b807445e0": "a85547e5829330daa796d2368815c493",
".git/objects/e0/9865ab665008ad2e19d56a7972f4ba091fa2e1": "2459ebb4bccc79d53ea90264cc289f94",
".git/objects/e2/e0162f63aa0b29c15d2c5c77ff60ea706514dc": "84775585c5563ada57f93d24e0e80ca0",
".git/objects/e2/e9b0e562a7ac31117eec4314bffc0576013378": "6dd6c10d9a394ab8cd2c200c26e568ea",
".git/objects/e7/3881979c2527a8d24a0b62682ba74fb0d14d76": "65009d4b4efac2cd2e4c63cdcb82b41b",
".git/objects/e7/6ec69a650f1323fe9af6dafc55628ca1afc7e1": "cdc851a64d802b21a07c9e1291833911",
".git/objects/e9/34bed521ef89bd407a55312a287bc2e24e3a77": "77bf9c76c5429d9c9296d653f4a42878",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/c2a9a9fd9cf7f84d48d6baef845a8b1caf706b": "99540473ded2883618ba990b735ba0f7",
".git/objects/ea/ef47289ca0f1fcb173b6173b0a261490df0c8c": "8605d0f2fd5fe7a23b15587083af1d83",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/ea299481d99e352024cfa543a275261c11cc15": "6028c544b2b57194dd80c372b903a90c",
".git/objects/ee/fcb51402ab27e0cb235d660b66829eee0e8246": "d9e2fcf28f64092c1cf7388bc3970208",
".git/objects/f0/1d933f5714ba6fcaaae341201730f2cb38ebbd": "6a87500516f65a5f86eafcae98d923a6",
".git/objects/f1/25b3dc3130f135ab8131a248ae4d3c5e51db70": "668dab15438e7434345bcbbbe5e3afa2",
".git/objects/f1/5c442c44087630037cce5822ce91be41740ed5": "50f2450c4b60c6c3adea8595ec1fde61",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f3/67c019d80926efd3c712d0a0c0e0c88ddbc464": "b42b7abffd4df317ce8b85caf600f690",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f8/5667b67869e4a31ef92590d7ee1a0677dcc67a": "38d6f72e8a9454c6d01f2403cbfa475a",
".git/objects/f9/e0c746457be5a380f6f8749eb964ff36a263d2": "0282adc361b13271cfc215bc6bd722b6",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/ff/84e213a21354fd1fac583f5a2882362354f5bc": "d41978fb85c1c07ed42d1f437a81275a",
".git/refs/heads/main": "40c628e58ace2cc119efd1d73c176606",
".git/refs/remotes/origin/main": "40c628e58ace2cc119efd1d73c176606",
"assets/AssetManifest.bin": "ee03ddcd7830ffbb052ed1360f30c991",
"assets/AssetManifest.bin.json": "d0a45e562070fe0862312319e8863408",
"assets/assets/fonts/InterTight-Bold.ttf": "d992d45d0373e33b3d75e471af494b7b",
"assets/assets/fonts/InterTight-ExtraBold.ttf": "2b9ea8f49ca23242e25172a4fd06f995",
"assets/assets/fonts/InterTight-ExtraLight.ttf": "f8f2e25a6c86927cfc3bf7e3c71706e1",
"assets/assets/fonts/InterTight-Light.ttf": "a838133e540468c71092d9a071f5e7c8",
"assets/assets/fonts/InterTight-Medium.ttf": "b4ab32bca9dae366fa7193b1b7bb1b4c",
"assets/assets/fonts/InterTight-Regular.ttf": "6c7bcaa885b5c58fe97d7f025e26bd30",
"assets/assets/fonts/InterTight-SemiBold.ttf": "701cf433d42ef71e28080e88d58354e1",
"assets/assets/fonts/InterTight-Thin.ttf": "0d30450031845dab0d691219ece4ee2f",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/images/avatar-icon.png": "be0151ce5974f1469e3b1295ea411763",
"assets/assets/images/edsim_logo.png": "252e1f0aaa334abdff50288f9e54d2e8",
"assets/FontManifest.json": "1b7517fe6e34056c1b482f1389ae6f0d",
"assets/fonts/MaterialIcons-Regular.otf": "03acb05bd9b0f52880ec7aa7fd830030",
"assets/NOTICES": "55e721cde0da40c0e592bf153695d1b7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"fav_icon_new32.png": "0a451b4371ab9198437c2043e1cbf764",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "4731ad85be0b6673cf5bf576359b4902",
"icons/icon-192-E-N.png": "04c6c41432140a0eb4263c30df0abbce",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/icon-512-E-N.png": "a1cba797d34675e7191d4f29227eb9da",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/icon-maskable-192-E-N.png": "23d01f2ad32402f7367dca680e8ca19a",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/icon-maskable-512-E-N.png": "9e661a8f2f86819ba72a7355cf4d3442",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fdd2ea08dd4248fed6bafaa2ef8c6c62",
"/": "fdd2ea08dd4248fed6bafaa2ef8c6c62",
"main.dart.js": "ded6d536c8a5df40b088dd398c29466a",
"manifest.json": "77375ea2b0ac73104cd8d31fe1bc7df6",
"version.json": "6f2dc1f96b03ca52982d5188c6cdbbb4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
