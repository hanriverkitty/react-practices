package com.poscodx.kanbanboard.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.poscodx.kanbanboard.vo.CardVo;
import com.poscodx.kanbanboard.vo.TaskVo;

@Repository
public class KanbanboardRepository {

	@Autowired
	private SqlSession sqlSession;
	
	public List<CardVo> findCardAll(){
		return sqlSession.selectList("kanbanboard.findCardAll");
	}
	
	public List<TaskVo> findTaskAll(Long no){
		return sqlSession.selectList("kanbanboard.findTaskAll",no);
	}

	public int insert(TaskVo vo) {
		return sqlSession.insert("kanbanboard.insert",vo);
	}

	public int delete(Long no) {
		return sqlSession.delete("kanbanboard.delete",no);
		
	}

	public int update(TaskVo vo) {
		return sqlSession.update("kanbanboard.update",vo);		
	}
}
