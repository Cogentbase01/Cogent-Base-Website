// Cogent Base — Tweaks panel. Drives CSS variables / root attributes on the
// vanilla homepage. Controls: gold accent hue, display serif, motion.
const CB_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "goldHue": 78,
  "serif": "bodoni",
  "motion": true
}/*EDITMODE-END*/;

function CogentTweaks() {
  const [t, setTweak] = useTweaks(CB_TWEAK_DEFAULTS);
  const root = document.documentElement;

  React.useEffect(() => {
    root.style.setProperty('--gold-h', String(t.goldHue));
  }, [t.goldHue]);

  React.useEffect(() => {
    root.setAttribute('data-serif', t.serif);
  }, [t.serif]);

  React.useEffect(() => {
    root.setAttribute('data-motion', t.motion ? 'on' : 'off');
  }, [t.motion]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Accent" />
      <TweakSlider
        label="Gold hue"
        value={t.goldHue}
        min={45} max={105} step={1}
        onChange={(v) => setTweak('goldHue', v)}
      />
      <TweakSection label="Typography" />
      <TweakSelect
        label="Display serif"
        value={t.serif}
        options={[
          { value: 'bodoni', label: 'Bodoni Moda — high contrast' },
          { value: 'libre', label: 'Libre Caslon — classic' },
          { value: 'spectral', label: 'Spectral — modern' },
        ]}
        onChange={(v) => setTweak('serif', v)}
      />
      <TweakSection label="Motion" />
      <TweakToggle
        label="Quiet reveals"
        value={t.motion}
        onChange={(v) => setTweak('motion', v)}
      />
    </TweaksPanel>
  );
}

(function mountCogentTweaks() {
  const el = document.createElement('div');
  el.id = 'cb-tweaks-root';
  document.body.appendChild(el);
  ReactDOM.createRoot(el).render(<CogentTweaks />);
})();
