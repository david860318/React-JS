import React from 'react';
import styles from './modal.css';

export default function AddModel() {
  const Modal = ({ show, handleClose }) => {
    if (!show) return null; // 如果不需要显示模态窗口，则返回 null

    const handleKeyDown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        handleClose();
      }
    };
  };
  return (
    <>
      <div className={styles.modalBackdrop}>
        <div className={styles.modalContent}>
          <h2 id="modal-title">创建新客服单</h2>
          <form>
            <div className={styles.formGroup}>
              <label htmlFor="orderNumber">订单编号</label>
              <input type="text" id="orderNumber" name="orderNumber" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="issueCategory">问题分类</label>
              <select id="issueCategory" name="issueCategory" required>
                <option value="">请选择问题分类</option>
                <option value="category1">分类1</option>
                <option value="category2">分类2</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="issueDescription">问题描述</label>
              <textarea
                id="issueDescription"
                name="issueDescription"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn">
              提交
            </button>
            <button type="button" className="btn">
              关闭
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
