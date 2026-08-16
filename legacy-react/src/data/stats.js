/* Headline numbers. `count` is the value the counter animates up to; `label`
   carries the unit prefix/suffix so "90" reads as "90% Less Manual Review".

   Every figure here is drawn from the project and experience entries — nothing
   is here that isn't defensible in an interview. Recruiters weight production
   metrics (throughput, cost, latency) above model metrics (accuracy, F1) and
   both above framework lists, so these lead with scale and reliability rather
   than a headline accuracy score. */

export const stats = [
  {
    icon: 'fas fa-headset',
    count: 20000,
    label: '+ Call Recordings Processed Monthly',
  },
  { icon: 'fas fa-rocket', count: 6, label: ' AI Systems Shipped to Production' },
  { icon: 'fas fa-clock-rotate-left', count: 90, label: '% Less Manual Review Effort' },
  /* fa-shield-alt, not the FA6 rename fa-shield-halved — the pinned
     Font Awesome 6.0.0 free build doesn't carry the new name and renders a
     blank box. Same for any other icon swapped here: check it actually draws. */
  { icon: 'fas fa-shield-alt', count: 152, label: ' Automated Tests at 90% Coverage' },
];
