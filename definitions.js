// effect audio group definitions
function create_effect_group(name, count) {
  var obj = {
    'name': name,
    'audio': [],
  };
  for (let i = 1; i <= count; i += 1) {
    obj.audio.push('./effects/' + name + '-' + i.toString() + '.ogg');
  }
  return obj;
}
var effect_groups = {
  'arrow-loose-and-hit': 7,
  'dirt-slam': 4,
  'dragon-bite': 2,
  'ooze': 5,
  'owlbear-roar': 4,
  'slam-attack': 4,
  'swimming': 6,
  'sword-clash': 3,
  'thunder-clap': 4,
  'wave-crash': 4,
};
for (let name in effect_groups) {
  let count = effect_groups[name]
  effect_groups[name] = create_effect_group(name, count);
}


// Specific soundboards
var soundboards = {}
soundboards.Wob_Legend = [
  './SB/address 135 roosevelt ave queens new york zipcode11354.mp3',
  './SB/address 2442 broadway new york zipcode10024.mp3',
  './SB/address 66 main st-flushing new york Zipcode 11367.mp3',
  './SB/address 720 amsterdam ave new york ZipCode 10025.mp3',
  './SB/address 955 columbus ave New York Zipcode 10025.mp3',
  './SB/even-dont-know-what-happened.mp3',
  './SB/expleen-me-please.mp3',
  './SB/hello-hello-are-you-there.mp3',
  './SB/hello.mp3',
  './SB/how-long-do-this-take.mp3',
  './SB/how-long-will-this-take.mp3',
  './SB/i-m-not-a-recording-so-what-are-you-talk-about.mp3',
  './SB/i-m-the-custumer-and-the-custumer-is-always-rigth-so-let-me-talk-plz.mp3',
  './SB/irsssa-hello-sir-i-m-calling-allecation-about-myn-name-there-is-somthing-wrong-with-myn-social-security-or-somthing.mp3',
  './SB/lister-to-me-are-you-there.mp3',
  './SB/my-name.mp3',
  './SB/ok-lister-to-me-i-m-have-a-broblume-and-you-need-to-help-me-fixs-it.mp3',
  './SB/SSA IRS im-returning-a-phone-call-about-legal-allocation-how-do-i-fix-that.mp3',
  './SB/that-is-not-good-rigth.mp3',
  './SB/what-first-lastname-sir.mp3',
  './SB/what-happent.mp3',
  './SB/what-is-your-name.mp3',
  './SB/what-now.mp3',
  './SB/whats-your-name.mp3',
  './SB/Name =1-ben-oplichter.mp3',
  './SB/Name-2-ben-oplichter-spelling.mp3',
  './SB/Name-1-jack-hoffman.mp3',
  './SB/Name 2-jack-hoffman-spelling.mp3',
  './SB/ok-no-broblume.mp3',
  './SB/ok-sir.mp3',
  './SB/ok-well-what-is-it.mp3',
  './SB/ok-what-now.mp3',
  './SB/ok.mp3',
  './SB/no.mp3',
  './SB/uh-huh.mp3',
  './SB/yea-hello-are-you-there.mp3',
  './SB/yeah.mp3',
  './SB/yes-or-no.mp3',
  './SB/yes-sir.mp3',
];

soundboards.Credit_Card = [
  './SB/Credit Card Mastercard-1-5330944963789523.mp3',
  './SB/Credit Card Mastercard-1-9523-last-digit.mp3',
  './SB/Credit Card Mastercard-11-t-8-521539074360827-eleven-t-8.mp3',
  './SB/Credit Card Mastercard-11-t-8-536022237916671-eleven-t-8.mp3',
  './SB/Credit Card Mastercard-11-t-8-547545827499484-eleven-t-8.mp3',
  './SB/Credit Card Mastercard-11-t-8-549947689107703-eleven-t-8.mp3',
  './SB/Credit Card Mastercard-11-t-8-554223441382910-eleven-t-8.mp3',
  './SB/Credit Card Visa-1-4345-last-digit.mp3',
  './SB/Credit Card Visa-1-4485146461394345.mp3',
  './SB/Credit Card Visa-11-t-8-455690774137635.mp3',
  './SB/Credit Card Visa-11-t-8-491668043682832.mp3',
  './SB/Credit Card Visa-4532011759914142.mp3',
  './SB/Credit Card Visa.mp3',
  './SB/Credit Card-11-t-8-is-11-t-8.mp3',
  './SB/Credit Card-cvv-529.mp3',
  './SB/Credit Card-cvv-919.mp3',
  './SB/Credit Card-exp-10-2023 (1).mp3',
  './SB/Credit Card-exp-10-2023.mp3',
  './SB/Credit Card-exp-15-2022.mp3',
  './SB/Credit Card-exp-20-2025.mp3',
  './SB/Credit Card-exp-6-2024 (1).mp3',
  './SB/Credit Card-exp-6-2024.mp3',
  './SB/Credit Card-mastercard.mp3',
  './SB/Credit Card-Visa-11-t-8-453947968971048.mp3',
  './SB/Credit Card=-are-you-playing-11-t-8 = 11-t-8.mp3',
];

soundboards.Car = [
  './SB/car-0-fast1tm6-complete.mp3',
  './SB/car-ambulance-siren-approach-and-drive-by.mp3',
  './SB/car-driving-in-the-rain.mp3',
  './SB/car-fire-truck-siren-pass-by-fire-truck-siren-pass-by-mp3cutnet.mp3',
  './SB/car-horn-sound-effect (1).mp3',
  './SB/car-horn-sound-effect.mp3',
  './SB/car-horn-traffic-sound-effect.mp3',
  './SB/car-idle-engine-sound-late-evening-1-hour.mp3',
  './SB/car-passing.mp3',
  './SB/car-police-sirens-passing-by.mp3',
  './SB/car-radio-los-santos-rock-radio.mp3',
  './SB/car-radio-non-stop-pop-radio.mp3',
  './SB/car-radio-rebel-radio-grand-theft-auto-v.mp3',
  './SB/car-radio-vinewood-boulevard-radio-grand-theft-auto-v.mp3',
  './SB/car-radio-x-grand-theft-auto-san-andreas.mp3',
  './SB/car-window-open-1 (1).mp3',
  './SB/car1-door-open-1.mp3',
  './SB/car2-door-close-1.mp3',
  './SB/car3-handbrake-release-1.mp3',
  './SB/car4-seat-belt-2.mp3',
  './SB/car5-key-ignition-insert-1.mp3',
  './SB/car6-ignition.mp3',
  './SB/car7-driving-45-minetes.mp3',
  './SB/carturn-signal.mp3',
];

soundboards.Tech_Support_Scammers = [
  './SB/Tech Support= 3d-tf-m4-d.mp3',
  './SB/Tech Support= broblum-whit-computer-help-me-fixs-it.mp3',
  './SB/Tech Support= cannot-click-it-away-what-do-i-need-to-do.mp3',
  './SB/Tech Support= computer-have-mental-issue-fixs-it-plz.mp3',
  './SB/Tech Support= criticel-error-on-webpage.mp3',
  './SB/Tech Support= do-i-m-need-to-press-run.mp3',
  './SB/Tech Support= do-you-want-to-install-it.mp3',
  './SB/Tech Support= fake-scammer-popup-info.mp3',
  './SB/Tech Support= go-to-critical-error-on-my-computer.mp3',
  './SB/Tech Support= i-m-click-no-what-now.mp3',
  './SB/Tech Support= im-clicking-yes-but-nothing-happened.mp3',
  './SB/Tech Support= im-on-the-web-page-what-now.mp3',
  './SB/Tech Support= in-dont-know-how.mp3',
  './SB/Tech Support= in-dont-know-what-happened-right-now.mp3',
  './SB/Tech Support= its-installing-wait-moment.mp3',
  './SB/Tech Support= that-is-the-error-code.mp3',
  './SB/Sound Effect ambient crowd noise a crowded mall 1 hour.mp3',
  './SB/Sound Effect= footsteps-heels-on-the-pavement-walking-sound-effect-heels-1-hour-pick-relax.mp3',
];

soundboards.Gif_Card_Scammers = [
  './SB/Femal Cashcheer-did-you-see-our-warning-sign-about-scams-this-amount-of-money-is-suspicious-i-cant-sell-you-them-im-sorry.mp3',
  './SB/Give Card Voulcher= calling-for-100-dollar-voucher-card.mp3',
  './SB/Give Card Voulcher= i-m-calling-for-the-gifcard-voucher-how-do-i-m-get-it.mp3',
  './SB/Give Card Voulcher= there-is-a-warning-sigth-about-scammes-here-what-is-that.mp3',
  './SB/Give Card Voulcher= warning-sighn-payment-gifcard.mp3',
  './SB/Give Card Voulcher= what-for-gene-gifcard-do-i-m-need-to-get.mp3',
  './SB/Give Card Voulcher= yes-hello-i-m-calling-for-the-gifcard-voulcher.mp3',
];

soundboards.Curse_The_scammer = [
  './SB/Curse=  2 tickel stick johnson error code 3dtfm4d its netsend packed.mp3',
  './SB/Curse= 1 tickle stick johnson.mp3',
  './SB/Curse= can you help me fix that problem from this ticket vendors under sunshine error code 3d-tfm-4D to NetSendpacket.mp3',
  './SB/Curse= can you help me install that come protection on my computer.mp3',
  './SB/Curse= computer-doesnt-have-cunt-protection-do-you-want-the-install-it-yes-or-no.mp3',
  './SB/Curse= cunt-is-virus-or-firewall-protection.mp3',
  './SB/Curse= do-not-also-remove-the-pickel-from-the-poop-shooter.mp3',
  './SB/Curse= how-big-is-your-packed.mp3',
  './SB/Curse= lister-to-me-pickle-dick-licker-i-m-got-a-issue-you-need-to-help-me-fixs-it-ok.mp3',
  './SB/Curse= sonagachi-jeebee-road.mp3',
  './SB/Curse= stick-in-here-pussy.mp3',
  './SB/Curse= stick-it-where-the-sun-doesnt-shine-error-code-three-dt-140-is-not-some-packet-but-i-dont-know-what-that-is.mp3',
  './SB/Curse= still-have-the-pickle-in-poop-shooter.mp3',
  './SB/Curse= take-a-glass-off-water-and-go-fuck-you-self.mp3',
  './SB/Curse= this-computer-have-a-paper-stuck-in-the-poop-shoot-or-do-you-want-to-help-me-remove-it-yes-or-no.mp3',
];

soundboards.Airport_Department = [
  './SB/ad-1-june-and-come-back-on-14-june.mp3',
  './SB/ad-10-april-and-come-back-on-17-april.mp3',
  './SB/ad-12-december-and-come-back-on-26-december.mp3',
  './SB/ad-15-july-and-come-back-on-22-july.mp3',
  './SB/ad-15-march-and-come-back-on-30-march.mp3',
  './SB/ad-2-oktober-and-come-back-on-16-oktober.mp3',
  './SB/ad-20-february-and-come-back-on-27-february.mp3',
  './SB/ad-22-august-and-come-back-on-29-august.mp3',
  './SB/ad-3-may-and-come-back-on-17-may.mp3',
  './SB/ad-5-january-and-come-back-on-19-january.mp3',
  './SB/ad-5-november-and-come-back-on-12-november (1).mp3',
  './SB/ad-5-november-and-come-back-on-12-november.mp3',
  './SB/ad-7-september-and-come-back-on-21-september.mp3',
];

soundboards.Sound_Effect = [
  './SB/Sound Effect ambient crowd noise a crowded mall 1 hour.mp3',
  './SB/Sound Effect= footsteps-heels-on-the-pavement-walking-sound-effect-heels-1-hour-pick-relax.mp3',
  './SB/Shoppin Sound Effect.mp3',
];
