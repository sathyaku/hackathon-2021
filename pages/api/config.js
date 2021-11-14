import labels from 'data/labels';
import toggles from 'data/toggles';

export default function configHandler(req, res) {
  res.status(200).json({
    labels,
    toggles
  });
}
