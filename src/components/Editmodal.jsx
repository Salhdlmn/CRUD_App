const Editmodal = ({
  editItem,
  setEditItem,
  setShowEditModal,
  handleEditBook,
}) => {
  return (
    <div className="delete-modal">
      <div className="modal-inner">
        <h5>Kitap İsmini Düzenle</h5>
        <input
          value={editItem.title}
          onChange={(e) => setEditItem({ ...editItem, title: e.target.value })}
          className="form-control"
          type="text"
        />
        <div className="d-flex justify-content-between gap-20">
          <button
            className="btn btn-warning"
            onClick={() => setShowEditModal(false)}
          >
            Vazgeç
          </button>
          <button className="btn btn-success" onClick={handleEditBook}>
            Kaydet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Editmodal;
