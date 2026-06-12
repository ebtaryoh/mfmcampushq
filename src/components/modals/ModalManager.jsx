import { AnimatePresence } from 'framer-motion';
import JoinModal from './JoinModal';
import PioneerModal from './PioneerModal';
import GiveModal from './GiveModal';
import GenericModal from './GenericModal';

export default function ModalManager({ activeModal, closeModal }) {
  return (
    <AnimatePresence>
      {activeModal === 'joinModal' && <JoinModal closeModal={closeModal} />}
      {activeModal === 'pioneerModal' && <PioneerModal closeModal={closeModal} />}
      {activeModal === 'giveModal' && <GiveModal closeModal={closeModal} />}
      {activeModal === 'calendarModal' && (
        <GenericModal title="Events Calendar" desc="National Congress: Aug 15-18. Retreat: Oct 2." closeModal={closeModal} />
      )}
      {activeModal === 'sermonModal' && (
        <GenericModal title="Sermon Library" desc="Streaming integration coming soon." closeModal={closeModal} />
      )}
      {activeModal === 'devotionalModal' && (
        <GenericModal title="Daily Devotional" desc="Today's reading: The Fire of the Altar." closeModal={closeModal} />
      )}
      {activeModal === 'radioModal' && (
        <GenericModal title="MFMCF Radio" desc="Live streaming server connecting..." closeModal={closeModal} />
      )}
      {activeModal === 'volunteerModal' && (
        <GenericModal title="Volunteer" desc="Join the national workforce today." closeModal={closeModal} />
      )}
      {activeModal === 'leadersModal' && (
        <GenericModal title="Leaders Portal" desc="Secure authentication required." closeModal={closeModal} />
      )}
    </AnimatePresence>
  );
}
